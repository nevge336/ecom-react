import Product from './Product';
import { FaTimes } from 'react-icons/fa';
import Footer from './Footer'; // Make sure to import the Footer component

const ProductList = ({ products, onDelete, onUpdate }) => {
    return (
        <div>
            {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-12">
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            product={product}
                            onDelete={onDelete}
                            onUpdate={onUpdate} />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center mt-14 overflow-hidden">
                    <h1 className="text-4xl text-red-500 flex items-center">
                        <FaTimes className="mr-3" /> Aucun produit
                    </h1>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default ProductList;