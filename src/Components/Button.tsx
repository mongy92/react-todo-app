import React from 'react';

interface Props {
  title: string;
  color?: string;
}

const Button: React.FC<Props> = ({ title, color = 'black' }) => {
  return (
    <button className='btn' style={{ backgroundColor: color }}>
      {title}
    </button>
  );
};

export default Button;
