import { Component } from 'react';
import {logout} from '../services/authServices';
class Logout extends Component {
    componentDidMount() {
        logout();
        window.location = '/vidly';
    }
    
    render(){
        return null;
    }
}
 
export default Logout;
