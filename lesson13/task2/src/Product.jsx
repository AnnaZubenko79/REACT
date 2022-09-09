import React from 'react';

const Product = ({ match }) => <div className="product">{match.params.productId}</div>;

export default Product;
