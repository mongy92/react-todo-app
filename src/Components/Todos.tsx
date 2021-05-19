import Todo from './Todo';

const todos = [
  {
    id: 1,
    title: 'Styding React',
    day: new Date().toString(),
  },
  {
    id: 2,
    title: 'Go to GYM',
    day: new Date().toString(),
  },
];

const Todos = () => {
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default Todos;
