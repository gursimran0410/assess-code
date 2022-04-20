import React from "react";

export function LoginPage() {
  const closeNav = () => {
    document.getElementById("loginPage").style.width = "0";
  };

  return (
    <>
      <button className="closebtn" onClick={closeNav}>
        X
      </button>
      <div className="loginContainer">
        <img
          height="100px"
          width="100px"
          alt="main-icon"
          src="https://img.icons8.com/external-line-icons-vinzence-studio/64/000000/external-college-user-avatar-line-icons-vinzence-studio.png"
        />
        <h3>Log In Or Sign Up</h3>
        <button className="fbBtn buttonBrd fontWhite">
          <img
            alt="fb"
            src="https://img.icons8.com/material-outlined/48/000000/facebook-new.png"
          />
          &nbsp; continue with facebook
        </button>
        <button className="fbBtn gBtn buttonBrd fontWhite">
          <img
            alt="gpls"
            src="https://img.icons8.com/material-outlined/48/000000/google-plus.png"
          />
          &nbsp; continue with google
        </button>
        <h3>Or use your email address</h3>
        <div>
          <button className="loginBtn buttonBrd">Log In</button>
          <button className="loginBtn signUp buttonBrd">Sign Up</button>
        </div>
      </div>
    </>
  );
}
