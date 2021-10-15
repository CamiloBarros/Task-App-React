import React, { useState } from 'react'
import logo from '../logo.svg'


function TodoForm({ onAddTodo }) {

    const [task, setTask] = useState({
        title: '',
        responsible: '- Anonimo',
        description: '',
        priority: ''
    })

    const handleInput = (e) => {
        
        const {value, name} = e.target;
        
        setTask({ 
            ...task, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTodo( task )
        setTask({
            title: '',
            responsible: '- Anonimo',
            description: '',
            priority: ''
        })
        const { title, responsible, description, priority } = e.target
        
        title.value = ''
        responsible.value = ''
        description.value = ''
        priority[0].selected = true
    }

    return (
        <div className="card">
            <span className="mt-3">
                <img src={logo} alt="" width="80" height="50" className="d-inline-block align-text-top App-logo" alt="logo" />
            </span>
            <form className="card-body" onSubmit={ handleSubmit }>
                <div className="form-group mb-2">
                    <input type="Text" name="title" className="form-control" placeholder="Title" onChange={ handleInput } />
                </div>
                <div className="form-group mb-2">
                    <input type="text" name="responsible" className="form-control" placeholder="Responsible" onChange={ handleInput } />
                </div>
                <div className="form-group mb-2">
                    <input type="text" name="description" className="form-control" placeholder="Description" onChange={ handleInput } />
                </div>
                <div className="form-group mb-2">
                    <select name="priority" className="form-select" onChange={ handleInput } >
                        <option selected hidden>Selecciona una prioridad</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-info text-light" type="submit">SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm
