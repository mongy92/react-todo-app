import React from 'react';

interface Props {
  title: string;
  color?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ title, color = 'black', onClick }) => {
  return (
    <button
      disabled={!onClick}
      className='btn'
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
