import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Form from "../components/Form";

const Login = ({ onLoggedIn }) => {
  const [toDashboard, setToDashboard] = useState(false);

  if (toDashboard === true) {
    return <Navigate to="/dashboard" />;
  }

  const submitHandler = user => {
    setToDashboard(true);
    onLoggedIn(user);
  };

  return (
    <>
      <h1>Login</h1>
      {/* <Form afterSubmit={() => navigate("/dashboard")} /> */}
      <Form afterSubmit={submitHandler} />
    </>
  );
};

export default Login;
