import React from 'react';
import Rating from 'react-rating';

const ReviewProduct = (props) => {
    const {name, img, seller, price, stock, star, quantity, key} = props.product;
    const {handleRemove} = props;
    return (

        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <h4>Quantity: {quantity}</h4>
                <button onClick={ () => handleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewProduct;