import axios from "axios";

export async function GetAllCategoryItems() {
  const cats = await axios.get(`http://localhost:3000/category/`);
  return cats;
}
