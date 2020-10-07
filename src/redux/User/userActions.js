import axios from "axios";
import Cookie from "js-cookie";

import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_LOGOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
} from "./userConstants";

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post("/api/users/signin", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.message });
  }
};
const signup = (firstName, lastName, email, telNumber, password) => async (
  dispatch
) => {
  dispatch({ type: USER_SIGNUP_REQUEST });
  try {
    const { data } = await axios.post("/api/users/signup", {
      firstName,
      lastName,
      email,
      telNumber,
      password,
    });
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: error.response.data.message,
    });
  }
};

const logout = () => (dispatch) => {
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export { signin, logout, signup };
