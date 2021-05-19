import { useState } from 'react';
import { TodoType } from '../types/TodoType';

interface Props {
  onAdd: (todo: TodoType) => void;
}

const AddTodo: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState<string>('');

  console.log(text);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert('Please Write Todo');
      return;
    }

    const id = new Date().getTime();
    onAdd({ id, title: text });
    setText('');
  };
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Todo</label>
        <input
          type='text'
          placeholder='Add Todo'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <input type='submit' value='Save Todo' className='btn btn-block' />
    </form>
  );
};

export default AddTodo;
