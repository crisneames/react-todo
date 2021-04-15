import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text:'Doctors Appointment',
      day: 'Feb 5  at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text:'Meeting at School',
      day: 'Feb 6  at 2:30pm',
      reminder: false,
    },
    {
      id: 3,
      text:'Doctors Appointment',
      day: 'Feb 7  at 2:30pm',
      reminder: false,
    }
  ])


  // Add Todo
  const addTodo = (task) => {
    console.log(task)
  }

  // Delete Todo
  const deleteTask = id => {
    //console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Reminder
  const reminder = id => {
    //console.log(id)
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task ))
  }

  return (
    <div className="container">
      {'\n'}
      <Header />
      
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder}/> : ('No More Todos')}
    </div>
  );
}

export default App;
