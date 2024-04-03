import axios from "axios";
import Constants from "expo-constants";

const { apiKey } = Constants.expoConfig.extra;

export async function createUser(email, password) {
  console.log(apiKey);
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
}
