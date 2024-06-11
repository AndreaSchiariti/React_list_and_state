import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  function handleAddTask(event) {
    event.preventDefault();

    const newTask = event.target.elements.task.value;

    setTodos((todos) => [...todos, newTask ]);

    event.target.elements.task.value = ""
  }

  function handleReset() {
    setTodos([])
  }

  function handleRemoveTask(event) {
    setTodos((todos) => {
      const taskList = [...todos]
      
      taskList.splice(event.target.name, 1)

      return taskList
    })
  }

  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo} <button name={index} onClick={handleRemoveTask}>Remove</button></li>
        ))}
      </ul>

      <form onSubmit={handleAddTask}>
        <input name="task" type="text" placeholder="Add a New Task" />
        <button>Add Task</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </>
  );
}
