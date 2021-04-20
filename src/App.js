import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  // Don't showAddTask
  const [showAddTask, setShowAddTask] = useState(false)
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
      text:'Grocery Shopping',
      day: 'Feb 7  at 2:30pm',
      reminder: false,
    }
  ])


  // Add Todo
  const addTodo = task => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask ={ id, ...task }
    setTasks([...tasks, newTask])
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
  const answers = () => {
    console.log(showAddTask)
    return setShowAddTask(!showAddTask)

  }

  return (
    <div className="container">
      {/* Set showAddTask to opposite */}
      <Header onAdd={ answers } showAdd={showAddTask} />
      {/* && Terinary without an else */}
      {showAddTask && <AddTask onAdd={addTodo} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder}/> : ('No More Todos!')}
    </div>
  );
}

export default App;

