import React from 'react';

const ReviewProduct = (props) => {
    const {name, price, quantity, key} = props.product;
    const {handleRemove} = props;
    return (
        <div className="product">
            <div>
            <p>{name}</p>
            <h2>Price: {price}</h2>
            <h4>Quantity: {quantity}</h4>
            <button onClick={ () => handleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewProduct;