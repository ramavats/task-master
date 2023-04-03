import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Take a break and stretch your legs',
        day: 'Apr 3rd at 3:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Call your friend to catch up',
        day: 'Apr 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Attend the team meeting',
        day: '9:00 AM Tomorrow',
        reminder: false,
    },
    {
      id: 4,
      text: 'Pay your credit card bill',
      day: '2:00 PM on the 15th of this month',
      reminder: false,
  },
  {
    id: 5,
    text: 'Start working on your project',
    day: '10:00 AM tomorrow',
    reminder: false,
},
])

// Add Task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}


  return (
    <div className="container">
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks today'}
    </div>
  );
}

export default App;
