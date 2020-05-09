import axios from "axios";
export async function IsAuthorized(product, id) {
  const cat = window.localStorage.getItem("userToken");

  if (!id) {
    const added = await axios
      .post("http://localhost:3000/product/add/", product, {
        headers: { Authorization: cat }
      })
      .catch(err => {
        console.log(err);
      });
    return added;
  } else {
    const edited = await axios
      .patch(`http://localhost:3000/product/:${id}`, product, {
        headers: { Authorization: cat }
      })
      .catch(err => {
        console.log(err);
      });
    return edited;
  }
}
// if (product == null) {
//   const deleted = await axios
//     .delete(
//       `http://localhost:3000/product/${id}`
//       // {},
//       // {
//       //   headers: { Authorization: cat }
//       // }
//     )
//     .catch(err => {
//       console.log(err);
//     });
//   return deleted;
// }
