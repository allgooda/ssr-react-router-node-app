import React from 'react';

function List(props) {
    console.log('HAHAHAAHAHAH')

    const { products, location } = props

    const { ability } = location.match.params;

    return (
      <div>
        <h3>{ability}</h3>
        <div>
        { products.resp.map(prod => {
            console.log(prod)
            const product = prod;
            console.log(product)
            return <div key={product._id}>{product.name}</div>
        })}
        </div>
      </div>
    )
}


export default List;
