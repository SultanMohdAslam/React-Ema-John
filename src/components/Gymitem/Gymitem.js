import React from 'react';
import './Gymitem.css'


const Gymitem = ({ product, handleAddToCart }) => {
    const { name, img, details, time, Age } = product;
    return (
        <div className='product'>
            <img src={img} alt="" onError={(e) => {
                e.currentTarget.src =
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/856e874762eb48da8e22acda00efaeb4_9366/Tiro_Track_Pants_Black_GN5490_21_model.jpg"
            }} />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>{details}</p>
                <p><small>For Age: {Age}</small></p>
                <p><small>Time required: {time}</small></p>
            </div>
            <button className='btn-cart'>
                <p onClick={() => handleAddToCart(product)}>Add to list</p>
            </button>
        </div>
    );
};

export default Gymitem;