import TaskCard from './TaskCard'
import { useContext } from 'react';
import {TaskContext} from '../context/TaskContext'

function TaskList() {
  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0){
    return <h1 className='notFound'>Not found</h1>
  }

  return (
    <div className='tasklist'>
      {tasks.map((task)=>(
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList;
