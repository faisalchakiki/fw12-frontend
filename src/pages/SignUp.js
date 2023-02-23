import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// import Button from "../collection/Button";
// import Input from "../collection/Input";
// import InputPass from "../collection/InputPass";
import { registerAction } from "../redux/actions/auth";
import * as Yup from "yup";
import "yup-phone";
import YupPassword from "yup-password";
import { ErrorMessage, Field, Form, Formik } from "formik";
YupPassword(Yup);

const validateSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .phone("ID", true, "Phone number is invalid")
    .required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string().required("Required").min(6),
});

const SignUp = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = React.useState("");
  // const register = () => navigate("/main");
  const dispatch = useDispatch();
  const registerProcess = (value) => {
    setAlert("");
    const callback = (err) => {
      if (err) {
        setAlert("failed");
      } else {
        setAlert("success");
        setInterval(()=>{
          navigate("/login");
        },2000)
      }
    };
    dispatch(
      registerAction({
        email: value.email,
        password: value.password,
        firstName: value.firstName,
        lastName: value.lastName,
        phoneNumber: value.phoneNumber,
        callback,
      })
    );
  };

  return (
    <div className="flex h-screen">
      <section className="left w-3/5 bg-[url('../img/bg-auth.jpg')] bg-center bg-no-repeat hidden md:block border-r-[3px]">
        <div className="flex justify-center items-end w-full h-screen pb-[25%] lg:pb-[5%]">
          <h1 className="text-[5vw] text-black italic font-bold">CINEPHILE</h1>
        </div>
      </section>
      <section className="right mx-auto md:mx-0 w-[90%] sm:w-[60%] md:w-2/5 md:px-[6%] md:flex flex-col justify-center items-center md:items-stretch h-screen">
        <h1 className="text-[30px] text-black italic font-bold text-right underline-offset-[5px] underline md:hidden mt-5 mb-5">
          CINEPHILE
        </h1>
        {alert === "success" && (
          <div className="alert alert-success shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Registration is successful, login to access the application
              </span>
            </div>
          </div>
        )}
        {alert !== "success" && alert !== "" ? (
          <div class="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Failed Registration, email or phone number already in use.
              </span>
            </div>
          </div>
        ) : null}
        <h1 className="text-[30px] font-semibold mb-[5px]">Sign Up</h1>
        <p className="text-[#aaaaaa] text-[20px] mb-[10px]">
          Fill your additional details
        </p>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
          }}
          validationSchema={validateSchema}
          onSubmit={(e) => registerProcess(e)}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <div className="input-part text-[16px] text-[#4e4b66]">
                  <label for="firstName">First Name :</label>
                  <Field
                    placeholder="Write your first name"
                    id="firstName"
                    name="firstName"
                    className="w-full bg-[#fcfdfe] border rounded-2xl divide-solid border-slate-300 py-[10px] pl-[24px] mt-[6px] mb-[8px]"
                  />
                </div>
                <ErrorMessage
                  className="text-red-600 font-semibold mt-[-5px] mb-[5px] text-[14px]"
                  name="firstName"
                  component="div"
                />
                <div className="input-part text-[16px] text-[#4e4b66]">
                  <label for="lastName">Last Name :</label>
                  <Field
                    placeholder="Write your last name"
                    id="lastName"
                    name="lastName"
                    className="w-full bg-[#fcfdfe] border rounded-2xl divide-solid border-slate-300 py-[10px] pl-[24px] mt-[6px] mb-[8px]"
                  />
                </div>
                <ErrorMessage
                  className="text-red-600 font-semibold mt-[-5px] mb-[5px] text-[14px]"
                  name="lastName"
                  component="div"
                />
                <div className="input-part text-[16px] text-[#4e4b66]">
                  <label for="phoneNumber">Phone Number :</label>
                  <Field
                    placeholder="Write your phone number"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="w-full bg-[#fcfdfe] border rounded-2xl divide-solid border-slate-300 py-[10px] pl-[24px] mt-[6px] mb-[8px]"
                  />
                </div>
                <ErrorMessage
                  className="text-red-600 font-semibold mt-[-5px] mb-[5px] text-[14px]"
                  name="phoneNumber"
                  component="div"
                />
                <div className="input-part text-[16px] text-[#4e4b66]">
                  <label for="email">Email :</label>
                  <Field
                    placeholder="Write your email"
                    id="email"
                    name="email"
                    className="w-full bg-[#fcfdfe] border rounded-2xl divide-solid border-slate-300 py-[10px] pl-[24px] mt-[6px] mb-[8px]"
                  />
                </div>
                <ErrorMessage
                  className="text-red-600 font-semibold mt-[-5px] mb-[5px] text-[14px]"
                  name="email"
                  component="div"
                />
                <div className="input-part text-[16px] text-[#4e4b66]">
                  <label for="password">Password :</label>
                  <Field
                    placeholder="Write your password"
                    id="password"
                    type="password"
                    name="password"
                    className="w-full bg-[#fcfdfe] border rounded-2xl divide-solid border-slate-300 py-[10px] pl-[24px] mt-[6px] mb-[8px]"
                  />
                </div>
                <ErrorMessage
                  className="text-red-600 font-semibold mt-[-5px] mb-[5px] text-[14px]"
                  name="password"
                  component="div"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-md w-full py-[10px] my-[5px] bg-[#fca311] text-white text-center cursor-pointer rounded-[16px] hover:bg-orange-600"
                >
                  Register now
                </button>
              </Form>
            );
          }}
        </Formik>
        <div className="w-full text-center mt-3">
          <p className="text-slate-400 text-[17px] mt-1">
            Already have?{" "}
            <Link to="/login" className="underline text-[#fca311] font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
