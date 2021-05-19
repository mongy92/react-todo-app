import React from 'react';

interface Props {
  title?: string;
}

const Header: React.FC<Props> = ({ title = 'Welcome' }) => {
  return (
    <header>
      <h1 style={headerStyle}>{title}</h1>
    </header>
  );
};

export default Header;

const headerStyle = {
  color: 'red',
  backgroundColor: 'black',
};
