import { TodoType } from '../types/TodoType';
import Todo from './Todo';

interface Props {
  todos: TodoType[];
  onDelete: (id: number) => void;
}

const Todos: React.FC<Props> = ({ todos, onDelete }) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Todos;
