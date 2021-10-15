import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';

import { todos } from './todos.json';

function App() {

  /* Hooks */
  const [todo, setTodo] = useState(todos);

  const handleAddTodo = ( element ) => {
    setTodo([
      ...todo, 
      element
    ])

  }

  const handleRemove = ( index ) => {
    if ( window.confirm('Estás seguro de querer eliminar?') ) {
      setTodo(
        todo.filter( (e, i) => i !== index )
      )
    }
  }

  const handleUpdate = ( object, index ) => {
    console.log(object, index);
  }

  const showTasks = todo.map((object, index) => {
    return (
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header">
            <h3> {object.title} </h3>
            <span className="badge rounded-pill bg-danger">
              { object.priority }
            </span>
          </div>
          <div className="card-body"> 
            <p> {object.description} </p> 
            <p> <strong> {object.responsible} </strong> </p>
          </div>
          <div className="card-footer">
            <button className="btn btn-danger m-1" onClick={ () => handleRemove( index ) }>Delete</button>
            <button className="btn btn-info m-1" onClick={ () => handleUpdate( object, index ) }  >Update</button>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="App row">
      <Navigation tasks = { todo } />
      <div className="container col-md-3 p-5">
        <TodoForm onAddTodo={ handleAddTodo } />
        <div className="container m-2">
          {/* Insertar formulario para actualizar la información */}
        </div>
      </div>
      <div className="container col">
        <div className="row p-5">
          { showTasks }
        </div>
      </div>
    </div>
  );
}

export default App;
