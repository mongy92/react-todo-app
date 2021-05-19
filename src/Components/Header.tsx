import React from 'react';

interface Props {
  title?: string;
}

const Header: React.FC<Props> = ({ title = 'Welcome' }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <button className='btn'>ADD</button>
    </header>
  );
};

export default Header;

// const headerStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };
