import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="border-2 border-gray-200 p-4 rounded">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="mb-2">{product.description}</p>
            <p className="mb-2">Prix: {product.price}$</p>
            <p>Catégorie: {product.category}</p>
        </div>
    );
}

export default Product;