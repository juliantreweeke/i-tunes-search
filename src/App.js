import { Route, Switch } from 'react-router-dom';
import Album from './pages/Album/Index';
import Home from './pages/Home/Index';

function App() {
  return (
          <Switch>
              <Route path="/" component={Home} exact />
              {/* <Route path="/:id" component={Home} exact /> */}
              <Route path="/album/:id" component={Album} />
          </Switch>
  )
}

export default App;


