import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { NavLink, useHistory } from "react-router-dom";
import Homemain from "./Homemain";

const Home = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("username", name);
    sessionStorage.setItem("token", "565764565");
    window.location.reload();
  };
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
    } else {
      document.getElementById("modal_button").click();
    }
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" id="navbar_home">
            <img src="images/S.png" alt="logo" className="w-72 mt-2 ml-5" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item ml-10 border-2 border-blue-500 rounded-md w-28 text-center">
                <a
                  className="nav-link font-medium"
                  href="https://smartcollege-chat.herokuapp.com/"
                >
                  Chatroom
                </a>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active ml-10"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ml-10">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item ml-10">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item ml-10">
                <a className="nav-link active mr-10" href="/">
                  <AccountCircleIcon /> {sessionStorage.getItem("username")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button
        type="button"
        class="btn btn-light disabled outline-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        id="modal_button"
      ></button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">
                Welcome to Smartcollege
              </h6>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={onFormSubmit}>
              <div class="modal-body">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  className="w-full"
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="modal-footer">
                <button
                  type="submit"
                  class="btn w-28 bg-gradient-to-bl from-green-500 to-green-400 text-white font-medium"
                >
                  Done
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Homemain />
    </>
  );
};

export default Home;
