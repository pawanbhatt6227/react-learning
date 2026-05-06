import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: {"Dehradun" + " countValue: " + count}</h3>
      <h4>Contact: @akshayMarch7</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default User;
