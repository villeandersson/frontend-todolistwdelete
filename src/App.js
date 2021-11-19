import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState({ kuvaus: "", pvm: "" });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, [todo.kuvaus, todo.pvm]]);
  };

  const deleteItem = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className="App">
      <h1 className="App-header">TODOLIST</h1>
      <div className="App-input">
        <form onSubmit={addTodo}>
          Description:
          <input
            type="text"
            value={todo.kuvaus}
            name="kuvaus"
            onChange={inputChanged}
          />
          Date:
          <input
            type="date"
            value={todo.pvm}
            name="pvm"
            onChange={inputChanged}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo[1]}</td>
              <td>{todo[0]}</td>
              <td>
                <input
                  type="button"
                  value="Delete"
                  onClick={() => deleteItem(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
