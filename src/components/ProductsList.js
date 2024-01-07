import Product from './Product';

const ProductList = () => {
    const products = [
        { id: 1, name: 'Produit 1', description: 'Ceci est le produit 1', price: 19.99, category: 'Categorie 1' },
        { id: 2, name: 'Produit 2', description: 'Ceci est le produit 2', price: 29.99, category: 'Categorie 2' },
        { id: 3, name: 'Produit 3', description: 'Ceci est le produit 3', price: 39.99, category: 'Categorie 3' },
        { id: 4, name: 'Produit 4', description: 'Ceci est le produit 4', price: 49.99, category: 'Categorie 4' },
        { id: 5, name: 'Produit 5', description: 'Ceci est le produit 5', price: 59.99, category: 'Categorie 5' },
        { id: 6, name: 'Produit 6', description: 'Ceci est le produit 6', price: 69.99, category: 'Categorie 6' },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
