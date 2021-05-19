import { useState } from 'react';
import Header from './Components/Header';
import Todos from './Components/Todos';

function App() {
  const [todos, setTodos] = useState([
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
  return (
    <div className='container'>
      <Header title='Todo App' />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
