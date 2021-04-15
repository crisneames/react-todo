import Button from './Button'

const Header = ({ title }) => {

    const handleOnClick = () => {
        console.log('Click!')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='blue' text='Add' onClick={handleOnClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Todo Tracker',
}

export default Header
