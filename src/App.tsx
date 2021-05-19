import { useState } from 'react';
import Header from './Components/Header';
import Todos from './Components/Todos';
import { TodoType } from './types/TodoType';

function App() {
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: 1,
      title: 'Styding React',
      day: new Date().toString(),
    },
    {
      id: 2,
      title: 'Go to GYM',
      day: new Date().toString(),
    },
  ]);

  const onDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className='container'>
      <Header title='Todo App' />
      {todos.length > 0 ? (
        <Todos todos={todos} onDelete={onDelete} />
      ) : (
        <p>No Todos</p>
      )}
    </div>
  );
}

export default App;
