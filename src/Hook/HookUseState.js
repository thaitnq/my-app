import React, { useState } from 'react';


function HookUseState() {
  const [todoList, setTodoList] = useState(['Rikkei', 'HCM', 'frontend']);

  function removeTodo(index) {
    const newTodoList = [...todoList]; // < tham chiếu Object Assign
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <>
      <h1>Ví dụ về useState</h1>
      <ul className="todo-list" >
        {todoList.map((todo, index) => (
          <li
            style={{ color: 'red' }}
            key={index}
            onClick={() => removeTodo(index)}
          >
            {todo}
          </li>
        ))}
      </ul>
    </>
  )
}

export default HookUseState;
