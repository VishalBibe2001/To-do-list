import React, { useState } from "react";

const EditModal = ({ open, handleCloseMadal, todo, setTodos, todos }) => {
  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.desc);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUpdate = () => {
    console.log(todo);
    setTodos((prev) => {
      return prev.map((item) => {
        if (todo.sno === item.sno) {
          return {
            ...item,
            title: title,
            desc: desc,
            date: new Date().toDateString()
          };
        } else {
          return { ...item };
        }
      });
    });

    handleCloseMadal((prev) => !prev);
  };

  return (
    <div
      className="modal"
      tabIndex="-1"
      style={open ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseMadal}
            ></button>
          </div>
          <div className="modal-body">
            <div className="container my-3">
              <h3>Add a Todo</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => handleTitleChange(e)}
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
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleCloseMadal}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpdate}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
