import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Modal from 'react-modal';
import Header from './components/Header';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import Home from './components/Home';
import Navbar from './components/Navbar'; 
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

Modal.setAppElement('#root');

function App() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }

    useEffect(() => {
        const getProducts = async () => {
            const productsFromServer = await fetchProducts('http://localhost:5000/products')
            setProducts(productsFromServer)
        }
        getProducts()
    }, [])

    const addProduct = async (product) => {
        const res = await fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(product),
        });

        if (res.ok) {
            const productFromServer = await res.json();
            setProducts([...products, productFromServer]);
            toast.success("Produit ajouté avec succès");
        } else {
            console.error("Échec de l'ajout du produit");
        }
    }


    const deleteProduct = (id) => {
        toast(
            ({ closeToast }) => (
                <div>
                    <p>Effacer le produit?</p>
                    <div className="flex gap-2">
                    <button className="btn btn-green" onClick={async () => {
                        await fetch(`http://localhost:5000/products/${id}`, {
                            method: 'DELETE',
                        });
                        setProducts(products.filter((product) => product.id !== id));
                        toast.success("Produit effacé avec succès");
                        closeToast();
                    }}>Oui</button>
                    <button className="btn btn-red" onClick={() => {
                        toast.error("Produit non effacé");
                        closeToast();
                    }}>No</button>
                    </div>
                </div>
            ), 
            {
                position: "top-center",
                autoClose: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }
        );
    }
    const [showAddProduct, setShowAddProduct] = useState(false)

    const updateProduct = async (id, updatedProduct) => {
        const res = await fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        });

        if (res.ok) {
            const productFromServer = await res.json();
            setProducts(products.map((product) => product.id === id ? productFromServer : product));
            toast.success("Produit modifié avec succès");
        } else {
            console.error(`Échec de la modification du produit ${id}`);
            toast.error("Échec de la modification du produit");
        }
    }
    return (
        <Router>
            <ToastContainer />
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
                            <ProductList products={products} onDelete={deleteProduct} onUpdate={updateProduct} />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;