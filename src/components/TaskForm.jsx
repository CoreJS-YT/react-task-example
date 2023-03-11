import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask({
      title,
      desc
    })
    setTitle('')
    setDesc('')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Escribe el titulo de la tarea"
        className="form__title"
        onChange={(e)=>{setTitle(e.target.value)}}
        value={title}
        autoFocus
      />
      <textarea
        placeholder='Escribe la descripcion de la tarea'
        className="form__desc"
        onChange={(e)=>{setDesc(e.target.value)}}
        value={desc}
      ></textarea>
      <button className="form__btn">Crear</button>
    </form>
  )
}

export default TaskForm