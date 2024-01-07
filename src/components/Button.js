import PropTypes from 'prop-types'

const Button = ({text, onClick, color}) => {
    return(
        <button className={`btn ${color}`} onClick={onClick}>
            {text}
        </button>
    )
}
Button.defaultProps = {
    color: 'bg-blue-500 hover:bg-blue-800'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}
export default Button