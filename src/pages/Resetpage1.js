import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import http from "../helper/http";
const validateSchema = Yup.object({
  email: Yup.string().email().required("Required"),
});
const Resetpage1 = () => {
  const navigate = useNavigate();
  const [alert , setAlert] = useState(false)
  // const validation = () => navigate("/resetPage2");
  const forgotPassword = async (event) => {
    try {
      const email = event.email;
      await http().post("/auth/forgotAccount", { email });
      navigate('/resetPage2')
    } catch (err) {
      setAlert(true)
      console.log(err);
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
        {alert && (
          <div className="alert alert-error shadow-lg mb-[20px]">
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
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error! email no listed.</span>
            </div>
          </div>
        )}
        <h1 className="text-[30px] text-black italic font-bold text-right underline-offset-[5px] underline md:hidden mt-5 mb-5">
          CINEPHILE
        </h1>
        <h1 className="text-[30px] font-semibold mb-[8px]">
          Fill your complete email
        </h1>
        <p className="text-[#aaaaaa] text-[20px] mb-[20px]">
          we'll send a link to your email shortly
        </p>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={validateSchema}
          onSubmit={(e) => forgotPassword(e)}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <div className="input-part text-[16px] text-[#4e4b66]">
                  <label for="email">Email :</label>
                  <Field
                    placeholder="Write your email account"
                    id="email"
                    name="email"
                    className="w-full bg-[#fcfdfe] border rounded-2xl divide-solid border-slate-300 py-[10px] pl-[24px] mt-[6px] mb-[8px]"
                  />
                </div>
                <ErrorMessage
                  className="text-red-600 font-semibold"
                  name="email"
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

export default Resetpage1;
