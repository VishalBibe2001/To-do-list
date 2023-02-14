import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  // console.log(props.todos);
  const [isFiltered, setIsfiltered] = useState(false);

  let Desc = isFiltered ? (
    <th scope="col">Name</th>
  ) : (
    <>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
    </>
  );

  //   console.log(props.todos, "array");
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Creation Date</th>

            {Desc}
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            <th className="btn-group">
              <button
                className="btn btn-secondary btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                filter by
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => setIsfiltered(true)}
                  >
                    to-do name
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => setIsfiltered(false)}
                  >
                    Reset
                  </a>
                </li>
              </ul>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.todos.length === 0
            ? "No todos create yet, Let's create a todo Click on Add Todo button"
            : props.todos.map((todo) => {
                return (
                  <TodoItem
                    todo={todo}
                    key={todo.sno}
                    todos={props.todos}
                    setTodos={props.setTodos}
                    isFilter={isFiltered}
                  />
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
