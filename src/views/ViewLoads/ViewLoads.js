import { react, useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

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





const getLoads = async () => {
  return await fetch("http://127.0.0.1:5000/loads")
}

export const ViewLoads = () => {
  const [ loads, setLoads ] = useState([]);
  useEffect(() => {
    getLoads().then(res => {
      return res.json()
    }).then(result => setLoads(result));
    return () => {
    }
  }, [])

  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th className="JobNumber">JobNumber</th>
          <th className="EndTimeDate">Date</th>
          <th className="UnitWeight">Unit Weight</th>
          <th className="ProductName">Product</th>
          <th className="CustomerName">Customer</th>
          <th className="Edit">Edit</th>
        </tr>
      </thead>
      <tbody>
      {loads.slice(0).reverse().map((el) => {
        return (
              <tr>
                
                <td className="JobNumber">{el.JobNumber}</td> 
                <td className="EndTimeDate">{el.EndTimeDate}</td> 
                <td className="UnitWeight">{el.UnitWeight}</td> 
                <td className="ProductName">{el.ProductName}</td> 
                <td className="CustomerName">{el.CustomerName}</td> 
                <td className="Edit">
                <Link to="/edit-load">
                  <Button variant="primary">Edit</Button>
                </Link>
                </td>
              </tr>
           
          
        )
      })}
      </tbody>
      </Table>
    </div>
  );
}
