import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext'

function TaskCard({task}) {
  const { deleteTask } = useContext(TaskContext)

  return (
    <div className='tasklist__task'>
      <h1 className='tasklist__task__title'>{task.title}</h1>
      <p className="tasklist__task__description">{task.desc}</p>
      <button
        className="tasklist__task__det"
        onClick={()=>deleteTask(task.id)}  
      >Delete</button>
    </div>
  )
}

export default TaskCard