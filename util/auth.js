import axios from "axios";
import Constants from "expo-constants";

const { apiKey } = Constants.expoConfig.extra;

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${apiKey}`;

  try {
    const response = await axios.post(url, {
      email,
      password,
      returnSecureToken: true,
    });

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
