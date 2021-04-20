import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

  
    return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='blue' text={showAdd ? 'Close' : 'Add'} handleOnClick={onAdd} />
    </header>
    )
}

Header.defaultProps = {
    title: 'Todo Tracker',
}

export default Header
