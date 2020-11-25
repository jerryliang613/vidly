import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/navbar';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import notFound from './components/notfound';
import MovieForm from './components/movieform';
import LoginForm from './components/loginform';
import Register from './components/registerForm';
import Logout from './components/logout';
import CustomerForm from './components/customerForm';
import CustomerRegister from './components/customerRegister';
import { getCurrentUser } from './services/authServices';
import ProtectedRoute from './components/common/protectedRoute';


class App extends Component {
  state = {};
  componentDidMount() {
    const user = getCurrentUser();
    this.setState({user});
  }
  render(){
    const {user} = this.state;
  return (
    <div className = 'container'>
        <ToastContainer />
        <NavBar user = {user}/>
      <div className = 'content'>
        <Switch>
          <Route path = '/login' component = {LoginForm} />
          <Route path = '/logout' component = {Logout} />
          <ProtectedRoute path = '/register' component = {Register} />
          <ProtectedRoute path = '/customers/new' component = {CustomerRegister} />
          <ProtectedRoute path = '/customers/:id' component = {CustomerForm} />
          <ProtectedRoute path = '/customers' component = {Customers} />
          <ProtectedRoute path = '/rentals' component = {Rentals} />
          <ProtectedRoute path = '/movies/new' component = {MovieForm}/>
          <Route path = '/movies/:movieid' render = {props => <MovieForm {...props} user = {user} />} />
          <Route path = '/movies' render = {props=><Movies {...props} user= {user} />} />
          <Route path = '/vidly' exact render = {props=><Movies {...props} user= {user} />} />
          <Route path = '/' exact render = {props=><Movies {...props} user= {user} />} />
          <Route path = '/notfound' component = {notFound} />
          <Redirect to ='/notfound' />
        </Switch>
      </div>
      
    </div>
  );
  }
}

export default App;
