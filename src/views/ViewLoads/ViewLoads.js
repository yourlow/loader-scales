import { react } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./ViewLoads.css"

const MOCKLoads = [
  {
    "JobNumber" : 1,
    "Date" : "30/06/2021:0900",
    "Weight" : 40,
    "ProductName": "Sand",
    "CustomerName" : "Tweed Landscape Supplies",

  },
  {
    "JobNumber" : 2,
    "Date" : "30/06/2021:1000",
    "Weight" : 38,
    "ProductName": "Sand",
    "CustomerName" : "Tweed Landscape Supplies",

  },
  {
    "JobNumber" : 3,
    "Date" : "30/06/2021:1030",
    "Weight" : 38,
    "ProductName": "Sand",
    "CustomerName" : "Tweed Landscape Supplies",

  }
    
  ]



export const ViewLoads = () => {


  return (
    <div>
      {MOCKLoads.slice(0).reverse().map((el) => {
        return (
          <div className="ViewLoads">
            
            <table className= "table">
              <tr>
                <td>
                <Link to="/edit-load">
                  <button className="table-Button">Edit</button>
                </Link>
                </td>
                <td>{el.JobNumber}</td> 
                <td>{el.Date}</td> 
                <td>{el.Weight}</td> 
                <td>{el.ProductName}</td> 
                <td>{el.CustomerName}</td> 
              </tr>
            </table>
          </div>
        )
      })}
    </div>
  );
}
