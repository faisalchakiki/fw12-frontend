import React from "react";
import Button from "../collection/Button";
import Input from "../collection/Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { login as loginAction } from "../redux/reducers/auth";
import { loginAction } from "../redux/actions/auth";

function Counter() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = (event) => {
    event.preventDefault();
    const {value: email} = event.target.email
    const {value: password} = event.target.password
    const callback = ()=>{
      navigate("/home");
    }
    dispatch(loginAction({email , password , callback}));
  };
  let [count, setCount] = React.useState(1);
  let increment = () => {
    if (count === 10) {
      alert("number can no longer be added");
      return false;
    }
    return setCount(count + 1);
  };
  let decrement = () => {
    if (count === 1) {
      alert("number can no longer be reduced");
      return false;
    }
    return setCount(count - 1);
  };
  return (
    <div className="container">
      <h1 className="text-2xl font-bold m-2">Counter Page</h1>
      <div className="main">
        <button onClick={decrement}>Dec</button>
        <div>{count}</div>
        <button onClick={increment}>Inc</button>
      </div>
      <form onSubmit={login} className="w-[50%] mx-auto my-[50px]">
        <Input label="Email" id="email" type="email" />
        <Input label="Password" id="password" type="password" />
        <Button value="Sign In"></Button>
      </form>
    </div>
  );
}

export default Counter;
