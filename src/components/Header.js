import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    return (
        <header className="flex justify-between items-center mb-2 mt-12 p-12">
            <h1 className="text-sm sm:text-md md:text-2xl lg:text-3xl xl:text-4xl font-bold">{props.title}</h1>

            <Button text={props.showAdd ? 'Fermer' : 'Ajouter'} 
                    color={props.showAdd ? 'btn-orange' : 'btn-teal'} 
                    onClick={props.toggleForm} />
        </header>
    );
}
Header.defaultProps = {
    title: 'Liste des produits'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header;