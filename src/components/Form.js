import React, { useState } from "react";

const Form = ({ afterSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    username: username,
    password: password,
  };
  
  return (
    <form onSubmit={() => afterSubmit(user)}>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Form;
