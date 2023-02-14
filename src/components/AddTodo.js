import React, { useState } from "react";

const AddTodo = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // const [date, setDate]= useState("");

  const hadnleAddTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    let myTodo = {
      sno,
      title,
      desc,
      date: new Date().toDateString()
    };
    setTodos([...todos, myTodo]);

    // console.log(myTodo);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("You cannot add empty todo");
    } else {
      hadnleAddTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
