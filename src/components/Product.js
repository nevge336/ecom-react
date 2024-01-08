import { useState } from 'react';
import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import Modal from 'react-modal';


const Product = ({ product, onDelete, onUpdate }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [category, setCategory] = useState(product.category);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Update the product
        const updatedProduct = {
            id: product.id,
            name: name,
            description: description,
            price: price,
            category: category
        };

        // Call a function to update the product in the state
        onUpdate(updatedProduct.id, updatedProduct);

        // Close the modal
        closeModal();
    };
    return (
        <div className="border-2 border-orange-300 p-4 rounded font-sans">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <div>

                    <FaTimes
                        className="text-red-600 cursor-pointer"
                        onClick={() => onDelete(product.id)}
                    />
                </div>
            </div>
            <p className="mb-2">{product.description}</p>
            <p className="mb-2">Prix: {product.price}$</p>
            <div className='flex justify-between items-center mb-2'>
                <p>Catégorie: {product.category}</p>
                <FaPencilAlt
                    className="text-blue-600 cursor-pointer mr-2"
                    onClick={openModal}
                />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)'
                    }
                }}
            >
                <h2 className="text-2xl font-bold mb-2">
                    Modifier le produit
                    <FaTimes
                        className="text-red-600 cursor-pointer float-right"
                        onClick={closeModal}
                    />
                </h2>
                <form className="add-form p-20" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label>Nom</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom" />
                    </div>
                    <div className='form-control'>
                        <label>Description</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                    </div>
                    <div className='form-control'>
                        <label>Prix</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Prix" />
                    </div>
                    <div className='form-control'>
                        <label>Categorie</label>
                        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Categorie" />
                    </div>
                    <input type="submit" className="btn btn-orange btn-block mt-4" value="Modifier" />
                </form>
            </Modal>
        </div>
    );
}

export default Product;