// import React from 'react';

// const Product = ({ match }) => <div className="product">{match.params.productId}</div>;

// export default Product;

import React from 'react';
// import { useParams } from 'react-router-dom';

const Product = ({ match }) => {
  return <div className="page__content">{match.params.productId}</div>;
};

export default Product;
