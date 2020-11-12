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
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_INVOICE_SUCCESS,
  USER_UPDATE_SHIPPING_SUCCESS,
} from "./userConstants";

const update = (
  userId,
  firstName,
  lastName,
  telNumber,
  email,
  password,
  shipping,
  invoice
) => async (dispatch, getState) => {
  const {
    userSignin: { userInfo },
  } = getState();
  dispatch({
    type: USER_UPDATE_REQUEST,
    payload: { userId, firstName, lastName, telNumber, email, password },
  });
  try {
    const { data } = await axios.put(
      "/api/users/" + userId,
      { firstName, lastName, telNumber, email, password, shipping, invoice },
      {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      }
    );
    if (shipping) {
      dispatch({ type: USER_UPDATE_SHIPPING_SUCCESS, payload: data });
    } else if (invoice) {
      dispatch({ type: USER_UPDATE_INVOICE_SUCCESS, payload: data });
    } else {
      dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    }
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: error.response.data.message });
  }
};

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

export { signin, logout, signup, update };
