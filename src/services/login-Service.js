import axios from "axios";

export async function LoginUser(user) {
  // debugger;

  const loggedIn = await axios
    .post(`http://localhost:3000/user/login`, user)
    .catch(err => console.log(err));
  return loggedIn;
}
