import axios from "axios";

export async function RegisterUser(user) {
  const registerValidation = await axios
    .post(`http://localhost:3000/user/register`, user)
    .catch(err => {
      console.log(err);
    });

  return registerValidation;
}
