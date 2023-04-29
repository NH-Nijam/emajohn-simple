import  { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] =useState([]);
    const [cart,setCart] =useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart =(product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='Shop-container'>
            <div className="Shop-add">
                {
                    products.map(product => <Product
                    key={product.id}
                    product ={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="order-summary">
                <h2>Order Summary</h2>
                <h3>Selected Item: {cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;