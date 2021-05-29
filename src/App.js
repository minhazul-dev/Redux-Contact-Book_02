
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Add from './components/Add/Add';
import Edit from './components/Edit/Edit';
function App() {
  return (

<Router>
      <div>
        <ToastContainer/>
        <Navbar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/add">
           <Add/>
          </Route>
          <Route path="/edit/:id">
            <Edit/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
