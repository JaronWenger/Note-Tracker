import React, { useState } from "react";

function CreateArea(props) {
  const [block, setBlock] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setBlock((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    props.add(block);
    setBlock({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={block.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={block.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
