/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import { TodoType } from '../types/TodoType';

interface Props {
  todo: TodoType;
}

const Todo: React.FC<Props> = ({ todo }) => {
  return (
    <div className='todo'>
      <h3>{todo.title}</h3>
      <p>{todo.day}</p>
    </div>
  );
};

export default Todo;
