
const Button = ({ color, text, handleOnClick}) => {

    return (
        <button 
        onClick={handleOnClick} style={{  backgroundColor: color}}
        className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'blue'
}
export default Button
