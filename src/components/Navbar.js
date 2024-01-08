import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="absolute top-0 right-0 mt-4 mr-[10%]">
            <ul className="flex space-x-10">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `font-bold text-lg hover:text-orange-500 ${isActive ? 'underline text-orange-500' : ''}`}
                    >
                        Acceuil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            `font-bold text-lg hover:text-orange-500 ${isActive ? 'underline text-orange-500' : ''}`}
                    >
                        Produits
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;