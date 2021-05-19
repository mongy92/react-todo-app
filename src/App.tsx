import Header from './Components/Header';
import Todos from './Components/Todos';

function App() {
  return (
    <div className='container'>
      <Header title='Todo App' />
      <Todos />
    </div>
  );
}

export default App;
