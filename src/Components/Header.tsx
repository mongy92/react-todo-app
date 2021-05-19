import React from 'react';
import Button from './Button';

interface Props {
  title?: string;
}

const Header: React.FC<Props> = ({ title = 'Welcome' }) => {
  const onClick = () => alert('Hello World');
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button title='Add' color='green' onClick={onClick} />
    </header>
  );
};

export default Header;

// const headerStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };
