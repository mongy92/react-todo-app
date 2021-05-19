import React from 'react';

interface Props {
  todo: {
    id: number;
    title: string;
    day: string;
  };
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
