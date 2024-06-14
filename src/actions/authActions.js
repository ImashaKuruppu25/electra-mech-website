// import { useNavigation } from "react-router-dom";
import AyurMindsApi from "../api/apiService";
import { authActions } from "../store/authSlice";
import { getAxiosInstance } from "../utils/axios";

export const login = (email, password, navigate) => {

  return async (dispatch) => {
    try {
      const res = await getAxiosInstance().post(
        AyurMindsApi.authentication_service.signIn,
        { email, password },
        {
          withCredentials: true,
        }
      );
      console.log("🚀 ~ file: authActions.js:17 ~ return ~ res:", res)
  
      dispatch(authActions.login());
      localStorage.setItem("isLogin", true);
      // navigate.navigate("AppNavigator");
    } catch (err) {
      console.log("🚀 ~ file: authActions.js:14 ~ return ~ err:", err);
    }
  };
};
export const logout = (navigate) => {
  return async (dispatch) => {
    try {
      const res = await getAxiosInstance().post(
        AyurMindsApi.authentication_service.logout,
        null,
        {
          withCredentials: true,
        }
      );
      dispatch(authActions.logout());
      localStorage.removeItem("isLogin");
      // navigate.navigate("Welcome");
    } catch (err) {
      console.log("🚀 ~ file: authActions.js:14 ~ return ~ err:", err);
    }
  };
};

export const access = (navigate) => {
  return async (dispatch) => {
    try {
      const res = await getAxiosInstance().post(
        AyurMindsApi.authentication_service.access,
        null,
        {
          withCredentials: true,
        }
      );
      dispatch(authActions.access(res.data.ac_token));
    } catch (err) {
      console.log("🚀 ~ file: authActions.js:14 ~ return ~ err:", err);
      dispatch(logout(navigate));
    }
  };
};

export const info = (token, navigate) => {
  return async (dispatch) => {
    try {
      const res = await getAxiosInstance().get(
        AyurMindsApi.authorization_service.info,
        {
          headers: { Authorization: token },
        }
        // {
        //   withCredentials: true,
        // }
      );
      dispatch(authActions.setInfo(res.data));
    } catch (err) {
      console.log("🚀 ~ file: authActions.js:14 ~ return ~ err:", err);
      dispatch(logout(navigate));
    }
  };
};
