import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import Store from './store';
import Calender from "./pages/Calender"

function App() {
  return (
    <div>
      <Provider store={Store}>
        <Router>
          <Switch>
            <Route path="/year/:year/month/:month">
              <Calender />
            </Route>
            <Route path="/">
              <Calender />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

