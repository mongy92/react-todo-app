import { useState } from 'react';
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import Todos from './Components/Todos';
import { TodoType } from './types/TodoType';

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [showAdd, setShowAdd] = useState<boolean>(false);

  const onDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onAddTodo = (todo: TodoType) => {
    setTodos((prev) => [...prev, todo]);
  };
  return (
    <div className='container'>
      <Header
        title='Todo App'
        showAdd={showAdd}
        onClickAdd={() => setShowAdd(!showAdd)}
      />
      {showAdd && <AddTodo onAdd={onAddTodo} />}
      {todos.length > 0 ? (
        <Todos todos={todos} onDelete={onDeleteTodo} />
      ) : (
        <p>No Todos</p>
      )}
    </div>
  );
}

export default App;
