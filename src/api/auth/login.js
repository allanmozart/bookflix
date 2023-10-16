import axios from "axios";
import { ENDPOINT } from "../../utils/urls";

function setUserInLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("authToken", user.token);
}

export function getAuthToken() {
  return localStorage.getItem("authToken");
}

export function removeAuthToken() {
  localStorage.removeItem("authToken", getAuthToken());
}

export async function verifyUser(email, password) {
  try {
    const response = await axios.post(ENDPOINT.login, {
      email,
      password,
    });

    setUserInLocalStorage(response.data.data);
    return { message: "OK", data: response?.data };
  } catch (error) {
    return { message: "Error occurred", data: error.response?.data };
  }
}

export function setAuthHeader() {
  const token = getAuthToken();
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
