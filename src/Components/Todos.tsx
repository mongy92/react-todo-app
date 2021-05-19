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
        <h3 key={todo.id}>{todo.title}</h3>
      ))}
    </>
  );
};

export default Todos;
