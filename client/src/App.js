import React, { useState, useEffect } from 'react';
import { postTodosAPI, getTodosAPI, patchTodosAPI, deleteTodosAPI } from './api/todos'
import CreateToDo from './CreateToDo';
import TodoTable from './TodoTable'
function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    getTodosAPI().then(todos => setTodos(todos))
  }, []);
  const addTodo = (todo) => {
    postTodosAPI(todo).then(data => {
      setTodos([...todos, data])
    })
  }
  const updateTodo = (id, done) => {
    patchTodosAPI(id, (done) ? false : true).then(data => {
      if(data){
        getTodosAPI().then(todos => setTodos(todos))
      }
    })
  }
  const deleteTodo = (id) => {
    deleteTodosAPI(id).then(data => {
      if (data.deletedCount === 1) {
        setTodos(todos.filter(todo => todo._id !== id))
      }
    })
  }
    return (
      <main role="main" className="container">
        <CreateToDo onCreate={addTodo} />
        <TodoTable 
          todos={todos} 
          onUpdate={updateTodo}
          onDelete={deleteTodo}
        />
      </main>  
    )
}
export default App;