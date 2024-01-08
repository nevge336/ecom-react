import { FaTimes } from 'react-icons/fa';

const Product = ({ product, onDelete }) => {
    return (
        <div className="border-2 border-gray-200 p-4 rounded">
            <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <FaTimes 
                className="text-red-600 cursor-pointer"
                onClick = {() => onDelete(product.id)} 
            />
            </div>
            <p className="mb-2">{product.description}</p>
            <p className="mb-2">Prix: {product.price}$</p>
            <p>Catégorie: {product.category}</p>
            
        </div>
    );
}

export default Product;