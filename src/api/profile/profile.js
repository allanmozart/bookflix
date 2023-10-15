import axios from "axios";
import { ENDPOINT } from "../../utils/urls";
import { getAuthToken } from "../../api/auth/login";

export async function profile(token) {
  token = getAuthToken();
  try {
    const response = await axios.get(ENDPOINT.profile, {
        headers: {
            Authorization: token,
        }
    });
    return { message: "OK", data: response.data };
  } catch (error) {
    return {
      message: "Error occurred",
      data: error.response.data.errors,
    };
  }
}

export async function updateProfile(token, email, name){
  token = getAuthToken();
  try{
    const response = await axios.put(ENDPOINT.profile,
      {
        email, 
        name,
      },
      {
        headers: 
        {
          Authorization: token,
        }
      }
    );
 return { message: "OK", data: response.data };
  } catch (error) 
  {
    return {
      message: "Error occurred",
      data: error.response.data.errors,
    };
  }
}
