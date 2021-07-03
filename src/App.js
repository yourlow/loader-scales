import logo from './logo.svg';
import './App.css';
import { AddLoad } from './views/AddLoad/AddLoad';
import { ViewLoads } from './views/ViewLoads/ViewLoads';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from "react-bootstrap";
function App() {
  return (
    <Router>
      <div>
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/add-loads" component={AddLoad}/>

          <Route path="/view-loads" component={ViewLoads}/>
          <Route component={Navigation}/>
        </Switch>
      </div>
    </Router>
  );
}

class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <div className="buttons">
        <Link to="/add-loads"  >
          <Button variant="primary" size="lg" block className="nav-button">
            Add Load
          </Button>
        </Link>
        <Link to="/view-loads"  >
          <Button variant="primary" size="lg" block className="nav-button">
            View Load
          </Button>
        </Link>
        </div>
      </div>
    );
  }
}


export default App;
