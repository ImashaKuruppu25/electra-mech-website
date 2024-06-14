// All API's endpoints uses here
import {
  authenticationServiceBaseURL,
  autherizationServiceBaseURL,
  chatServiceBaseURL,
  messageServiceBaseURL,
} from "../utils/axios";

const AyurMindsApi = {
  authentication_service: {
    register: `${authenticationServiceBaseURL()}/`,
    signIn: `${authenticationServiceBaseURL()}/signin`,
    access: `${authenticationServiceBaseURL()}/access`,
    logout: `${authenticationServiceBaseURL()}/signout`,
  },
  authorization_service: {
    info: `${autherizationServiceBaseURL()}/info`,
  },

}; 

export default AyurMindsApi;
