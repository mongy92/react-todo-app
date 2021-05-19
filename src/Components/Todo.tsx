import React from 'react';
import { TodoType } from '../types/TodoType';
import { FaTimes } from 'react-icons/fa';
interface Props {
  todo: TodoType;
}

const Todo: React.FC<Props> = ({ todo }) => {
  return (
    <div className='todo'>
      <h3>
        {todo.title} <FaTimes style={{ color: 'red' }} />
      </h3>
      <p>{todo.day}</p>
    </div>
  );
};

export default Todo;
