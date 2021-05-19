import React from 'react';
import { TodoType } from '../types/TodoType';
import { FaTimes } from 'react-icons/fa';
interface Props {
  todo: TodoType;
  onDelete: (id: number) => void;
}

const Todo: React.FC<Props> = ({ todo, onDelete }) => {
  return (
    <div className='todo'>
      <h3>
        {todo.title}
        <FaTimes style={{ color: 'red' }} onClick={() => onDelete(todo.id)} />
      </h3>
    </div>
  );
};

export default Todo;
