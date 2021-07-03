import { react } from "react";
import { Form, Button } from "react-bootstrap";




export const AddLoad = (props) => {


  return (
    <div>

      <h1>Add a Load</h1>
      <Form>
        <Form.Group>
          <Form.Label>Choose a Customer</Form.Label>
          <Form.Control as="select">
            <option value="Tweed Landscape and Gravel">Tweed Landscape and Gravel</option>
            <option value="Chinderah Golf Course">Chinderah Golf Course</option>
            <option value="All Saints Christian College">All Saints Christian College</option>
            <option value="Tweed Moto X">Tweed Moto X</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
        <Form.Label>Choose a Product</Form.Label>
          <Form.Control as="select">
            <option value="Fill Sand">Fill Sand</option>
            <option value="Washed Sand">Washed Sand</option>
            <option value="Top Soil">Top Soil</option>
            <option value="Screened Sand">Screened Sand</option>
          </Form.Control>
          <Form.Label>Weight:</Form.Label>
          <Form.Control as="input" type="number" step="0.01" id="weight" name="weight" min="0" max="100" pattern="\d*"></Form.Control>
          <Form.Label>Number Plate:</Form.Label>
          <Form.Control as="input" type="text" id="numberPlate" name="numberPlate"></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Control as="select">
            <option value="TweedLandscape@gmail.com">TweedLandscape@gmail.com</option>
            <option value="Accounts@chinderahgolf.com">Accounts@chinderahgolf.com</option>
          </Form.Control>
        <Button variant="primary" type="submit">
          Send Docket
        </Button>
      </Form>
      
      
    </div>
  );
}
