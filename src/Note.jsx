import React from "react";

function Note(props) {
  function handleClick() {
    return props.delete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.note.title}</h1>
      <p>{props.note.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
