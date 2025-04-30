import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const {name, id} = useParams();
   
    return ( 
        <div>
            <h1>Produto #{id} {name}</h1>
        </div>
     );
}
 
export default Product;