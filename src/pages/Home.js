import React from "react";
import { Link } from "react-router-dom";
import {useSelector ,useDispatch} from "react-redux"
import { logout as logoutAction} from "../redux/reducers/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()
  const valueToken = useSelector(state => state.auth.token);
  const dispatch = useDispatch()
  const Logout = ()=>{
    dispatch(logoutAction())
    navigate("/counter")
  }
  // console.log(token)
  return (
    <div className="container">
      <h1 className="text-4xl font-bold mb-2">Homepage</h1>
      {valueToken ? <span>Saya sudah login</span> : <span>Saya belum login</span>}
      {valueToken ? <button className="h-[35px] w-[100px] border bg-red-500 rounded text-white" onClick={Logout}>Logout</button> : null}
      <Link to="/counter" className="text-lg text-blue-700 font-bold">
        1.Go to Counter
      </Link>
      <Link to="/login" className="text-lg text-blue-700 font-bold">
        2.Sign In Web Cinephile
      </Link>
    </div>
  );
}
