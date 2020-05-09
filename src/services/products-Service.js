import axios from "axios";
//search, sort, page , currPage , items
export async function GetProducts(catId, search, currPage, items) {
  //debugger;
  const result = await axios
    .get(
      `http://localhost:3000/product/SSFP?cat=${catId}&search=${search}&currPage=${currPage}&items=${items}`
    )
    .catch(err => {
      console.log(err);
    });
  console.log(result);
  return result;
}
