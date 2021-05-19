const AddTodo = () => {
  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Todo</label>
        <input type='text' placeholder='Add Todo' />
      </div>
      <input type='submit' value='Save Todo' className='btn btn-block' />
    </form>
  );
};

export default AddTodo;
