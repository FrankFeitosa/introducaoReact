import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
    // const productList = [
    //     {id: 1, name: 'Banana'},
    //     {id: 2, name: 'Maça'},
    //     {id: 3, name: 'Laranja'},
    //     {id: 4, name: 'Espinafre'},
    //     {id: 5, name: 'Cenoura'}
    // ]
    // return ( 
    //     <div>
    //         <h1>Products</h1>
    //         <ul>
    //             {productList.map(product => (
    //                 <li key={product.id}><Link to={`product/${product.id}/${product.name}`}>{product.name}</Link><Link to={"/produto//"}></Link></li>
    //             ))}
    //         </ul>
    //     </div>
    //);
    return (
        <div>
            <h1>Produtos</h1>
            <ul>
                <li><Link to={"/product/1/Abacate"}>Abacate</Link></li>
                <li><Link to={"/product/2/Banana"}>Banana</Link></li>
                <li><Link to={"/product/3/Cenoura"}>Cenoura</Link></li>
                <li><Link to={"/product/4/Espinafre"}>Espinafre</Link></li>
                <li><Link to={"/product/5/Laranja"}>Laranja</Link></li>
            </ul>
        </div>
    );
}

export default Products;