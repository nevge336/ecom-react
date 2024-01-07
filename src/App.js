import Header from './components/Header';
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import { useState } from 'react';

function App() {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts(prevProducts => [...prevProducts, product]);
    };

    return (
        <div className="font-mono min-h-screen">
           <div className="container mx-auto p-8"> 
                <Header />
                <div className='max-w-screen-md mx-auto'>
                <AddProduct onAdd={addProduct} />    
                </div>
                <ProductsList products={products} />
            </div>
        </div>
    );
}

export default App;