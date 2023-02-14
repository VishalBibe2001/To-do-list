import React, { useState } from "react";
import EditModal from "./EditModal";

const TodoItem = (props) => {
  const { sno, title, desc, date } = props.todo;
  //   console.log(props.isFilter);

  const [isOpen, setIsOpen] = useState(false);

  const onDelete = (todo) => {
    console.log("onDelete", todo);
    props.setTodos(
      props.todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const handleEdit = () => {
    console.log("hi");
    setIsOpen((prev) => !prev);
  };

  const handleCloseMadal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <tr>
        <td scope="row">{sno + 1}</td>
        <td>{date}</td>
        {props.isFilter ? (
          <th>{title}</th>
        ) : (
          <>
            <td>{title}</td>
            <td>{desc}</td>
          </>
        )}
        <td>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => handleEdit()}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              onDelete(props.todo);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
      <EditModal
        open={isOpen}
        handleCloseMadal={handleCloseMadal}
        todo={props.todo}
        todos={props.todos}
        setTodos={props.setTodos}
      />
    </>
  );
};

export default TodoItem;
