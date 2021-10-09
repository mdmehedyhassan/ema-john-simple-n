import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {name, quantity} = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightblue',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">THis is {name}</h4>
            <p>Quantity {quantity}</p>
            <br />
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;