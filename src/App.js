import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import Home from './components/Home';
import Navbar from './components/Navbar'; 
import { useState } from 'react';


function App() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Produit 1', description: 'Ceci est le produit 1', price: 19.99, category: 'Categorie 1' },
        { id: 2, name: 'Produit 2', description: 'Ceci est le produit 2', price: 29.99, category: 'Categorie 2' },
        { id: 3, name: 'Produit 3', description: 'Ceci est le produit 3', price: 39.99, category: 'Categorie 3' },
        { id: 4, name: 'Produit 4', description: 'Ceci est le produit 4', price: 49.99, category: 'Categorie 4' },
        { id: 5, name: 'Produit 5', description: 'Ceci est le produit 5', price: 59.99, category: 'Categorie 5' },
        { id: 6, name: 'Produit 6', description: 'Ceci est le produit 6', price: 69.99, category: 'Categorie 6' },
    ]);

    const addProduct = (product) => {
        const lastId = products.length > 0 ? products[products.length - 1].id : 0
        const id = lastId + 1
        const newProduct = { id, ...product }
        setProducts([...products, newProduct])
    }
    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    }

    const [showAddProduct, setShowAddProduct] = useState(false)


    return (
        <Router>
            <div className="font-mono min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={
                        <>
                            <Navbar />
                            <Header toggleForm={() => setShowAddProduct(!showAddProduct)} showAdd={showAddProduct} />
                            <div className='max-w-screen-md mx-auto'>
                                {showAddProduct && <AddProduct onAdd={addProduct} />}
                            </div>
                            <ProductList products={products} onDelete={deleteProduct} />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;