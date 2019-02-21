import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import APP from './containers/App';
import Menu from './components/Menu';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';


import { Router, Route} from 'react-router';
import { browserHistory} from 'react-router-dom';

// ReactDOM.render(

// <Router>
// <Login>
//   <Switch>
//     <Route exact path="/" component={APP}/>
//     <Route path="/helloworld" component={APP}/>
//     <Route component={Menu}/>
//   </Switch>
// </Login>
// </Router>

// , document.getElementById('root'));

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/" component={APP}>
              <Route exact component={Login}/>
              {/* <Route path="home" component={Home}/>
              <Route path="login" component={Login}/>
              <Route path="register" component={Menu}/>
              <Route path="wall/:username" component={Menu}/> */}
          </Route>
      </Router>
  </Provider>, document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
