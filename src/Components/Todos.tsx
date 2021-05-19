import { TodoType } from '../types/TodoType';
import Todo from './Todo';

interface Props {
  todos: TodoType[];
}

const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default Todos;
