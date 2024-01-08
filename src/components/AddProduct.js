import React, { useState } from 'react';

const AddProduct = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !description || !price || !category){
            alert('Svp remplir tous les champs');
            return;
        }      

        onAdd({ name, description, price, category })
        setName('')
        setDescription('')
        setPrice('')
        setCategory('')
    }

    return (
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
            <input type="submit" className="btn btn-teal btn-block mt-4" value="Enregistrer le produit"/>
        </form>
    );
};

export default AddProduct;