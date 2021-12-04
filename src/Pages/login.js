import React, { useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  function handle() {
    navigate("/quizapp");
  }

  // function Call(e) {
  //   setname(e.terget, value);
  // }
  // console.log(Call);

  const Username = (e) => {
    let a = e.target.value;
    if (a == null) {
      return <div>Error</div>;
    } else {
      setUserName(a);
    }
  };

  return (
    <div className="khan">
      <div className="body">
        <Paper
          elevation={5}
          style={{
            textAlign: "center",
            width: "3sa0%",
            marginLeft: "10px",
            padding: "40px",
            background: "black",
          }}
        >
          <div className="change">
            <h1 className="">LOGIN</h1>

            <div className="styling">
              <input
                onChange={(e) => Username(e)}
                className="main"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="styling">
              <input
                // onChange={(e) => password(e)}
                className="main"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="stylinge">
              <button className="main-bat" onClick={handle}>
                login
              </button>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}
