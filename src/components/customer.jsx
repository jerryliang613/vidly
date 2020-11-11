import React from 'react';

const Customers = ({history, location}) => {

    return ( 
        <div className="content">
            <h1>Customers</h1>
            <h3>Name: {name} City: {city}</h3>
            <button onClick = {()=>history.push('/movies')} className = 'btn btn-primary'>return</button>
        </div>
     );
}
 
export default Customers;