import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import http from "../helper/http";
import YupPassword from "yup-password";
// import InputPass from "../collection/InputPass";
YupPassword(Yup);

const validateSchema = Yup.object({
  code: Yup.number().typeError("code must be a number").required("Required"),
  password: Yup.string().password().required("Required").min(6),
  Confirm_Password: Yup.string().password().required("Required").min(6),
});

const Resetpage2 = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = React.useState("");
  const [alertSuccess, setAlertSuccess] = React.useState("");
  const getAccount = async (value) => {
    const { password, Confirm_Password: confirmPassword, code } = value;
    if (password === confirmPassword) {
      try {
        await http().post("auth/resetPassword", {
          password,
          confirmPassword,
          code,
        });
        setAlertSuccess("Success Get Account! Please Relogin");
        return setTimeout(() => {
          setAlertSuccess("");
          navigate("/login");
        }, 5000);
      } catch (err) {
        console.log(err)
        setAlert("Code is false");
        setTimeout(() => {
          setAlert("");
        }, 5000);
      }
    } else {
      setAlert("Confirm Password Not Match!");
      return setTimeout(() => {
        setAlert("");
      }, 5000);
    }
  };
  return (
    <div className="flex h-screen">
      <section className="left w-3/5 bg-[url('../img/bg-auth.jpg')] bg-center bg-no-repeat hidden md:block border-r-[3px]">
        <div className="flex justify-center items-end w-full h-screen pb-[25%] lg:pb-[5%]">
          <h1 className="text-[5vw] text-black italic font-bold">CINEPHILE</h1>
        </div>
      </section>
      <section className="right mx-auto md:mx-0 w-[90%] sm:w-[60%] md:w-2/5 md:px-[6%] md:flex flex-col md:pt-[10%] items-center md:items-stretch h-screen">
        <div className="alert alert-warning shadow-lg mb-[20px]">
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
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Info! Get code at your Email</span>
          </div>
        </div>
        {alertSuccess && (
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
              <span>{alertSuccess}</span>
            </div>
          </div>
        )}
        {alert && (
          <div className="alert alert-error shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{alert}</span>
          </div>
        </div>
        )}
        <h1 className="text-[30px] text-black italic font-bold text-right underline-offset-[5px] underline md:hidden mt-5 mb-5">
          CINEPHILE
        </h1>
        <h1 className="text-[30px] font-semibold mb-[8px]">
          Fill your complete password
        </h1>
        <p className="text-[#aaaaaa] text-[20px] mb-[20px]">
          set your new password
        </p>
        <Formik
          initialValues={{
            code: "",
            password: "",
            Confirm_Password: "",
          }}
          validationSchema={validateSchema}
          onSubmit={(e) => getAccount(e)}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <div className="input-part text-[16px] text-[#4e4b66]">
                  <label for="code">Code :</label>
                  <Field
                    placeholder="Write your code account"
                    id="code"
                    name="code"
                    className="w-full bg-[#fcfdfe] border rounded-2xl divide-solid border-slate-300 py-[10px] pl-[24px] mt-[6px] mb-[8px]"
                  />
                </div>
                <ErrorMessage
                  className="text-red-600 font-semibold"
                  name="code"
                  component="div"
                />
                <div className="input-part text-[16px] text-[#4e4b66]">
                  <label for="password">New Password :</label>
                  <Field
                    placeholder="Write your new password"
                    id="password"
                    name="password"
                    type="password"
                    className="w-full bg-[#fcfdfe] border rounded-2xl divide-solid border-slate-300 py-[10px] pl-[24px] mt-[6px] mb-[8px]"
                  />
                </div>
                <ErrorMessage
                  className="text-red-600 font-semibold"
                  name="password"
                  component="div"
                />
                <div className="input-part text-[16px] text-[#4e4b66]">
                  <label for="confirmPassword">Confirm Password :</label>
                  <Field
                    placeholder="Write your confirm password"
                    id="confirmPassword"
                    name="Confirm_Password"
                    type="password"
                    className="w-full bg-[#fcfdfe] border rounded-2xl divide-solid border-slate-300 py-[10px] pl-[24px] mt-[6px] mb-[8px]"
                  />
                </div>
                <ErrorMessage
                  className="text-red-600 font-semibold"
                  name="Confirm_Password"
                  component="div"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-md w-full py-[10px] my-[5px] bg-[#fca311] text-white text-center cursor-pointer rounded-[16px] hover:bg-orange-600"
                >
                  Send to Code
                </button>
              </Form>
            );
          }}
        </Formik>
      </section>
    </div>
  );
};

export default Resetpage2;
