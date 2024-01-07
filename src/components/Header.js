import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    return (
        <header className="flex justify-between items-center mb-8">
            <h1 className="text-5xl text-center">{props.title}</h1>

            <Button text={props.showAdd ? 'Fermer' : 'Ajouter'} 
                    color={props.showAdd ? 'btn-red' : 'btn-green'} 
                    onClick={props.toggleForm} />
        </header>
    );
}
Header.defaultProps = {
    title: 'E-commerce avec React'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header;