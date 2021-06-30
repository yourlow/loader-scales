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


function App() {
  return (
    <Router>
      <div>
        <nav>
            <Link to="/add-loads">
              <button>Add Loads</button>
            </Link>
          
            <Link to="/view-loads">
            <button>View Loads</button>
            </Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/add-loads">
            <AddLoad />
          </Route>
          <Route path="/view-loads">
            <ViewLoads />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


export default App;
