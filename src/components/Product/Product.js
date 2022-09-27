import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleAddToCart }) => {
    const { name, img, seller, ratings, price } = product;
    return (
        <div className='product'>
            <img src={img} alt="" onError={(e) => {
                e.currentTarget.src =
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/856e874762eb48da8e22acda00efaeb4_9366/Tiro_Track_Pants_Black_GN5490_21_model.jpg"
            }} />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rattings: {ratings}</small></p>
            </div>
            <button className='btn-cart'>
                <p onClick={() => handleAddToCart(product)}>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;