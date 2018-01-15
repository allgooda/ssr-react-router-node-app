import React from 'react';

function List(props) {
    const { products } = props;
    console.log('CHECKINGNNGNG')
    console.log({products});
    return (
      <div>
        <div>
        { products.resp.map(prod => {
            const product = prod;
            return <div key={product._id}>{product.price}</div>
        })}
        </div>
      </div>
    )
}

export default List;
