import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CreateTask } from './components/CreateTask'
import { Table } from './components/Table'

function App() {
  const [writeTask, setWriteTask] = useState('')
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || [])



  const clearInputArea = () => {
    setWriteTask('')
  }

  const addToList = (writeTask) => {
    let dateToday = `${new Date()}`.split('').slice(0, 24).join("")
    let key = Date.now()
    setTaskList([{'key': key, 'task': writeTask, 'time': `${dateToday}`}, ...taskList])
    clearInputArea()
}

useEffect(() => {
  localStorage.setItem("taskList", JSON.stringify(taskList))
}, [taskList])


  return (
    <div className='app'>
      <h1 className="welcome">Welcome User!</h1>
      <CreateTask 
        writeTask={writeTask}
        setWriteTask={setWriteTask}
        taskList={taskList}
        setTaskList={setTaskList}
        clearInputArea={clearInputArea}
        addToList={addToList}
      />
      <Table 
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>


  )
}

export default App
