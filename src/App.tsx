import { useState } from 'react';
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import Todos from './Components/Todos';
import { TodoType } from './types/TodoType';

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const onDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onAdd = (todo: TodoType) => {
    setTodos((prev) => [...prev, todo]);
  };
  return (
    <div className='container'>
      <Header title='Todo App' />
      <AddTodo onAdd={onAdd} />
      {todos.length > 0 ? (
        <Todos todos={todos} onDelete={onDelete} />
      ) : (
        <p>No Todos</p>
      )}
    </div>
  );
}

export default App;
