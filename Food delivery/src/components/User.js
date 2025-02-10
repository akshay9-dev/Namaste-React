//////////////////  CLASS BASED COMPONENT ///////////////////
import { useState } from "react";

// This is functional component //
const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h1>count = {count}</h1>
      <h1>count = {count2}</h1>
      <h2>{name}</h2>
      <h3>Location: Pune</h3>
      <h4>Contact: akshayshahane1721@gmail.com</h4>
    </div>
  );
};

export default User;
