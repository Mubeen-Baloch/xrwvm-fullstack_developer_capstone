import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Register.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import close_icon from "../assets/close.png";
const Register = () => {
  // State variables for form inputs
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  // Handle form submission
  const register = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    let register_url = window.location.origin + "/djangoapp/register";
    // Send POST request to register endpoint
    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
      }),
    });
    const json = await res.json();
    if (json.status) {
      // Save username in session and reload dealers
      sessionStorage.setItem("username", json.userName);
      navigate('/dealers');
    } else if (json.error === "Already Registered") {
      setErrorMsg("The user with same username is already registered");
    } else {
      setErrorMsg("Registration failed. Please try again.");
    }
  };
  return (
    <div className="register_container" style={{ width: "50%" }}>
      <div
        className="header"
        style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
      >
        <span className="text" style={{ flexGrow: "1" }}>
          SignUp
        </span>
        <div
          style={{ display: "flex", flexDirection: "row", justifySelf: "end", alignSelf: "start" }}
        >
          <button style={{ background: 'none', border: 'none', padding: 0 }} onClick={() => navigate('/dealers')}>
            <img style={{ width: "1cm" }} src={close_icon} alt="X" />
          </button>
        </div>
        <hr />
      </div>
      <form onSubmit={register}>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} className="img_icon" alt="Username" />
            <input type="text" name="username" placeholder="Username" className="input_field" onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div>
            <img src={user_icon} className="img_icon" alt="First Name" />
            <input type="text" name="first_name" placeholder="First Name" className="input_field" onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
            <img src={user_icon} className="img_icon" alt="Last Name" />
            <input type="text" name="last_name" placeholder="Last Name" className="input_field" onChange={(e) => setlastName(e.target.value)} />
          </div>
          <div>
            <img src={email_icon} className="img_icon" alt="Email" />
            <input type="email" name="email" placeholder="email" className="input_field" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input">
            <img src={password_icon} className="img_icon" alt="password" />
            <input name="psw" type="password" placeholder="Password" className="input_field" onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        {errorMsg && <div style={{color: 'red', marginBottom: '10px'}}>{errorMsg}</div>}
        <div className="submit_panel">
          <input className="submit" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};
export default Register; 