import React, { useEffect } from 'react';
import './App.css';
import Home from './Home/Home';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import {Switch, Route} from 'react-router-dom';
import Footer from './Footer/Footer';
import LoginRegister from './LoginRegister/LoginRegister';

// App component
const App = (props) => {

  useEffect(() => {
    
    return () => {

    }
  });

  return (
    <div className='app'>
      <Switch>
        <Route exact path={'/'} render={props => <LoginRegister {...props} />} />
        <Route path={'/register'} render={props => <LoginRegister {...props} />} />
        <Route path={'/forgotpassword'} render={props => <div>Forgot password</div>} />
        <Route path={'/validatephone'} render={props => <div>Validation</div>} />
        <ProtectedRoute path={'/home'} component={Home} />
        <Route path={'*'} render={props => <div>Page Not Found</div>} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;