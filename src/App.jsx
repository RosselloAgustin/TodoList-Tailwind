import { useEffect, useState } from 'react';
import Title from './components/Title/Title';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';


function App() {


  //HOOKS
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Watch the next Marvel Movie',
      completed: false
    },
    {
      id: 2,
      title: 'Record the next Video',
      completed: false
    },
    {
      id: 3,
      title: 'Wash the dishes',
      completed: false
    },
    {
      id: 4,
      title: 'Study 2 hours',
      completed: false
    }
  ])

  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState(todos)

  useEffect(() => {
    if(activeFilter === 'all'){
      setFilteredTodos(todos)
    } else if(activeFilter === 'active'){
      const activeTodos = todos.filter(todo => todo.completed === false)
      setFilteredTodos(activeTodos)
    } else if(activeFilter === 'completed'){
      const completedTodos = todos.filter(todo => todo.completed === true)
      setFilteredTodos(completedTodos)
    }
  }, [activeFilter, todos])
  

  //Funciones

  const addTodo = (title) =>{
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }

    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList);
  }

  const handleSetComplete = (id) =>{
    const updatedList = todos.map(todo =>{
      if(todo.id === id){
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(updatedList);
  }

  const handleDelete = (id) =>{
    const updatedList = todos.filter(todo => todo.id !== id)
    setTodos(updatedList);
  }

  const handleClearComplete = () =>{
    const updatedList = todos.filter(todo => !todo.completed)
    setTodos(updatedList)
  }

  const showAllTodos = () =>{
    setActiveFilter('all')
  }

  const showActiveFilters = () =>{
    setActiveFilter('active')
  }

  const showCompletedTodos = () =>{
    setActiveFilter('completed')
  }

  return (

    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5" >
        <div className="container flex flex-col max-w-xl">
          
          <Title />
          <TodoInput addTodo={addTodo} />
          <TodoList 
            todos={filteredTodos} 
            activeFilter={activeFilter}

            handleSetComplete={ handleSetComplete } 
            handleDelete = { handleDelete } 
            handleClearComplete={ handleClearComplete }
            showAllTodos={ showAllTodos }
            showActiveTodos={ showActiveFilters }
            showCompletedTodos={ showCompletedTodos }
          />
        </div>
    </div>

  );
}

export default App
