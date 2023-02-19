import React from "react";
import Footer from "../collection/Footer";
import Input from "../collection/Input";
import Avatar from "../asset/img/man-icon.png";
import Button from "../collection/Button";
import { Link, useNavigate } from "react-router-dom";
import NavUser from "../collection/NavUser";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import http from "../helper/http";
import * as Yup from "yup"
import "yup-phone"
import { Formik } from "formik";

const validateSchemaProfile = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .phone("ID", true, "Phone number is invalid")
    .required("Required"),
  email: Yup.string().email().required("Required"),
});

const Profil = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alertSuccess, setAlertSuccess] = React.useState("");
  const [alert, setAlert] = React.useState("");
  const [refresh, setRefresh] = React.useState(null);
  const Logout = () => {
    dispatch(logoutAction());
    return navigate("/login");
  };
  const token = useSelector((state) => state.auth.token);
  const [profile, setProfile] = React.useState([]);
  React.useEffect(() => {
    getProfile();
  }, [alertSuccess, refresh]);
  const getProfile = async () => {
    const { data } = await http(token).get("/profile");
    setProfile(data.data[0]);
  };

  // changes Data Profile
  const [value, setValue] = React.useState({
    firstName: "" || profile?.firstName,
    lastName: "" || profile?.lastName,
    email: "" || profile?.email,
    phoneNumber: "" || profile?.phoneNumber,
  });
  let changes = false;
  if (
    value.firstName !== "" ||
    value.lastName !== "" ||
    value.phoneNumber !== "" ||
    value.email !== ""
  ) {
    changes = true;
  }
  const updatingProfile = async () => {
    const { data: result } = await http(token).patch("/profile", value);
    setAlertSuccess(result.message);
    setInterval(() => {
      setAlertSuccess("");
      setValue({
        firstName: "" || profile?.firstName,
        lastName: "" || profile?.lastName,
        email: "" || profile?.email,
        phoneNumber: "" || profile?.phoneNumber,
      });
      changes = false;
    }, 2500);
  };

  // changes Password
  const [password, setPassword] = React.useState({
    newPassword: "",
    confirmPassword: "",
  });
  const updatingPassword = async () => {
    if (
      password.newPassword !== password.confirmPassword ||
      password.newPassword === ""
    ) {
      setAlert("password not match");
      setInterval(() => {
        setAlert("");
      }, 3000);
    } else {
      const { data: result } = await http(token).patch("/profile/password", {
        password: password.newPassword,
      });
      setAlertSuccess(result.message);
      setInterval(() => {
        setAlertSuccess("");
      }, 3000);
    }
  };
  const setAvatar = async (value) => {
    const avatar = value.target.files[0];
    // file size limit 3MB
    if (avatar.size > 3000000) {
      alert("File size is too big!");
      return false;
    }
    // file type limit
    if (
      avatar.type !== "image/png" &&
      avatar.type !== "image/jpeg" &&
      avatar.type !== "image/jpg"
    ) {
      alert("File type is not supported!(png/jpeg)");
      return false;
    } else {
      try {
        const formData = new FormData();
        formData.append("picture", avatar);
        const { data: result } = await http(token).patch(
          "/profile/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setRefresh(true);
        setAlertSuccess(result.message);
        setInterval(() => {
          setAlertSuccess("");
          setRefresh(null);
        }, 3000);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <NavUser></NavUser>
      <main className="flex gap-5 px-[120px] py-[50px] bg-[#f5f6f8] items-start">
        <section className="bg-white rounded-[24px] w-[25%] p-[20px]">
          <p className="">INFO</p>
          <div className="w-[50%] h-auto border-[2px] border-black my-[20px] mx-auto rounded-full overflow-hidden">
            {profile.avatar !== null ? (
              <img alt="" src={profile.avatar} className="w-full h-auto" />
            ) : (
              <img alt="" src={Avatar} className="w-full h-auto" />
            )}
          </div>
          {alertSuccess !== "" && alertSuccess === "Success Upload Avatar" ? (
            <p className="text-green-500 font-bold text-[16px] italic mx-auto text-center">
            * {alertSuccess}
          </p>
          ) : null}
          <div className="w-full text-center my-3">
            <input
              type="file"
              onChange={(value) => setAvatar(value)}
              className="file-input file-input-info file-input-xs w-full max-w-xs mx-auto"
            />
          </div>
          <h4 className="text-[20px] text-[#14142b] text-center">
            {profile.firstName} {profile.lastName}
          </h4>
          <p className="text-[#4e4b66] text-[14px] text-center">
            {profile.statusUser}
          </p>
          <Link onClick={Logout}>
            <Button
              value="Logout"
              class="mt-[40px] h-[35px] py-0 w-[70%] mx-auto block"
            />
          </Link>
        </section>
        <section className="flex-1">
          <div className="navbar-profile bg-white rounded-[24px] p-[20px] w-[100%] flex gap-5 mb-[20px]">
            <div className="border-b-[2px] pb-1 border-[#fca311]">
              <Link to="/profile">
                <p>Account Settings</p>
              </Link>
            </div>
            <div>
              <Link to="/history">
                <p>Order History</p>
              </Link>
            </div>
          </div>
          <div className="details-profile bg-white rounded-[24px] p-[20px] w-[100%] flex gap-5 mb-[20px] flex-col">
            <p>Details Information</p>
            <hr />
            <div className="grid grid-cols-2 gap-[30px]">
              <Input
                change={(event) =>
                  setValue({ ...value, firstName: event.target.value })
                }
                label="First Name"
                value={profile.firstName}
              ></Input>
              <Input
                change={(event) =>
                  setValue({ ...value, lastName: event.target.value })
                }
                label="Last Name"
                value={profile.lastName}
              ></Input>
            </div>
            <div className="grid grid-cols-2 gap-[30px]">
              <Input
                type="email"
                change={(event) =>
                  setValue({ ...value, email: event.target.value })
                }
                label="Email"
                value={profile.email}
              ></Input>
              <div className="input-part text-[16px] text-[#4e4b66]">
                <label for="phonenumber">Phone Number</label>
                <div className="relative">
                  <div className="absolute pr-[10px] border-r-2 border-[#eaeaea] top-[25%] left-2">
                    <p className="text-[17px] text-black">+62</p>
                  </div>
                  <input
                    type="text"
                    id="phonenumber"
                    onChange={(event) =>
                      setValue({
                        ...value,
                        phoneNumber: event.target.value,
                      })
                    }
                    placeholder={`Write your Phone Number`}
                    defaultValue={profile.phoneNumber}
                    className={`w-full bg-[#fcfdfe] border rounded-2xl divide-solid border-slate-300 py-[10px] pl-[60px] mt-[6px] mb-[8px]`}
                    required
                  />
                </div>
              </div>
            </div>
            {alertSuccess !== "" &&
            alertSuccess === "Success Change Profile" ? (
              <p className="text-green-500 font-bold text-[16px] italic">
                * {alertSuccess}
              </p>
            ) : null}
          </div>
          {changes ? (
            <Button
              submit={updatingProfile}
              value="Update changes"
              class="w-[35%] h-[35px] py-0 mb-[20px]"
            ></Button>
          ) : (
            <Button
              value="Disabled"
              class="w-[35%] h-[35px] py-0 mb-[20px]"
            ></Button>
          )}
          <div className="details-profile bg-white rounded-[24px] p-[20px] w-[100%] flex gap-5 mb-[20px] flex-col">
            <p>Account and Privacy</p>
            <hr />
            <div className="grid grid-cols-2 gap-[30px]">
              <Input
                type="password"
                change={(event) =>
                  setPassword({ ...password, newPassword: event.target.value })
                }
                label="New Password"
              ></Input>
              <Input
                type="password"
                change={(event) =>
                  setPassword({
                    ...password,
                    confirmPassword: event.target.value,
                  })
                }
                label="Confirm Password"
              ></Input>
            </div>
            {alert !== "" ? (
              <p className="text-red-500 font-bold text-[16px] italic">
                * {alert}
              </p>
            ) : null}
            {alertSuccess !== "" &&
            alertSuccess === "Success Change Password" ? (
              <p className="text-green-500 font-bold text-[16px] italic">
                * {alertSuccess}
              </p>
            ) : null}
          </div>
          <Button
            submit={updatingPassword}
            value="Update changes"
            class="w-[35%] h-[35px] py-0"
          ></Button>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Profil;
