import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, seller, ratings, price} = props.product;

    const handleAddToCart =props.handleAddToCart;
    
    return (
        <div className='product-cart'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <div className='product-info-2'>
                    <p className='product-m-r'>Manufacturer: {seller}</p>
                    <p className='product-m-r'>Ratings: {ratings} Stars</p>
                </div>  
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;