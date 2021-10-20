import logo from './logo.svg';
import './App.css';
import Incrementor from './Components/Incrementor';
import ApiData from './Components/Apidata';
import Post from './Components/Post';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';

function App() {
  return (
    <div className="App">
        <Header />
      <Router>
        <Switch>
           <Route path="/posting">
              <Post />
          </Route>
          <Route path="/api-data">
              <ApiData />
          </Route>
          <Route path="/couter">
              <Incrementor />
          </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
