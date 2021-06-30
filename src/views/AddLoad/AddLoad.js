import { react } from "react";





export const AddLoad = (props) => {


  return (
    <div>
      <form>
        <label for="customer">Choose a customer</label>
        <select id="customer" name="customer">
          <option value="Tweed Landscape and Gravel">Tweed Landscape and Gravel</option>
          <option value="Chinderah Golf Course">Chinderah Golf Course</option>
          <option value="All Saints Christian College">All Saints Christian College</option>
          <option value="Tweed Moto X">Tweed Moto X</option>
        </select>

        <label for="product">Choose a Product</label>
        <select id="product" name="products">
          <option value="Fill Sand">Fill Sand</option>
          <option value="Washed Sand">Washed Sand</option>
          <option value="Top Soil">Top Soil</option>
          <option value="Screened Sand">Screened Sand</option>
        </select>
        <lable for="weight">Weight: </lable>
        <input type="number" id="weight" name="weight" min="0" max="100" pattern="\d*"></input>
      </form>
    </div>
  );
}
