import axios from "axios";
import { registerUrl } from "../../helpers/urls";

export async function register({ name, email, password }) {
  try {
    const response = await axios.post(registerUrl, { name, email, password });
    return { message: "OK", data: response.data };
  } catch (error) {
    return {
      message: "Error occurred",
      data: error.response.data.errors,
    };
  }
}
