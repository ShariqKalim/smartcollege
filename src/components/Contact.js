import React from "react";
import TextField from "@material-ui/core/TextField";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const res = await emailjs.sendForm(
        "service_wiarcmc",
        "template_1ijvoka",
        e.target,
        "user_myugS6IkEUuRiZ4ImRFyT"
      );
      if (res) {
        toast.warn("Form Submitted Successfully", {
          position: "top-center",
          autoClose: 2000,
        });
      } else {
        toast.error("Invalid Submission", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (err) {
      console.log(err);
    }
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  };
  return (
    <>
      <div>
        <div className="lg:w-10/12 mx-auto p-10 shadow-2xl md:w-10/12 ">
          <form className="flex flex-col" onSubmit={sendEmail}>
            <h1 className="text-center font-light">Contact Us</h1>
            <div className="mb-10">
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                className="w-full"
                autoComplete="off"
                name="fullname"
                required
              />
            </div>
            <div className="mb-10">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="w-full"
                autoComplete="off"
                name="email"
                required
              />
            </div>
            <div className="mb-10 flex justify-between flex-wrap">
              <div className="w-5/12">
                <TextField
                  id="outlined-basic"
                  label="Department"
                  variant="outlined"
                  className="w-full"
                  autoComplete="off"
                  name="department"
                  required
                />
              </div>
              <div className="mb-10 w-5/12">
                <TextField
                  id="outlined-basic"
                  label="Semester"
                  variant="outlined"
                  className="w-full"
                  autoComplete="off"
                  name="semester"
                  required
                />
              </div>
            </div>
            <div className="mb-10">
              <TextField
                id="outlined-multiline-static"
                label="Message...."
                multiline
                rows={8}
                variant="outlined"
                className="w-full"
                autoComplete="off"
                name="message"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white text-md tracking-wide font-medium bg-gradient-to-r from-green-500 to-green-400 rounded-full p-2 w-40 mx-auto drop-shadow-2xl"
            >
              submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
