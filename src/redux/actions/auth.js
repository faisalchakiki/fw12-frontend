import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
  "auth/loginAsync",
  async ({ email, password, callback }) => {
    try {
      const { data }= await axios.post("http://localhost:8888/auth/login", {
        email,
        password,
      });
      callback();
      // console.log(data.results)
      return data.results;
    } catch (err) {
      // console.log(err);
      callback(err)
      throw err;
    }
  }
);

export const registerAction = createAsyncThunk(
  "auth/registerAsync",
  async ({ email, password,firstName,lastName,phoneNumber,callback }) => {
    try {
      const { data }= await axios.post("http://localhost:8888/users", {
        email,
        password,
        firstName,
        lastName,
        phoneNumber
      });
      callback();
      return data[0]
    } catch (err) {
      // console.log(err);
      callback(err)
      throw err;
    }
  }
);