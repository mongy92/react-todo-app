import React from 'react';

interface Props {
  title: string;
  color?: string;
}

const Button: React.FC<Props> = ({ title, color = 'black' }) => {
  const onClick = () => {
    alert('Hello');
  };

  return (
    <button
      className='btn'
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
