import { useState } from 'react'

const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('false')

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Todo</label>
                <input type='text' placeholder='Add Todo' 
                value={day} 
                onChange={ e => setDay(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time'
                value={text} 
                onChange={ e => setText(e.target.value)} />
            </div>

            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox'
                value={text} 
                onChange={ e => setReminder(e.curentTarget.value)} />
            </div>

            <input type='submit' value='Save' className='btn'/>
            
        </form>
    )
}

export default AddTask
