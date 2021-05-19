import React from 'react';
import Button from './Button';

interface Props {
  title?: string;
  showAdd: boolean;
  onClickAdd: () => void;
}

const Header: React.FC<Props> = ({
  title = 'Welcome',
  showAdd,
  onClickAdd,
}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        title={showAdd ? 'Close' : 'Add'}
        color={showAdd ? 'red' : 'green'}
        onClick={onClickAdd}
      />
    </header>
  );
};

export default Header;

// const headerStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };
