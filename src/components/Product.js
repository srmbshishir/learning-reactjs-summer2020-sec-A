import './user.css';
import {Link} from "react-router-dom";


const Product = ({id,name, quanitity,price, callback})=>{
    return (
        <div className= 'std'>
            <h3>Product Id: {id}</h3>
            <h3>Product Name: {name}</h3>
            <p>Price: {price} </p> 
            <p>Quantity: {quanitity}</p>
            <button onClick={()=>callback(name)}>Delete</button>
            <Link to={`/edit/${id}`}> EDIT</Link>
        </div>
    );
}

export default Product;