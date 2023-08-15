import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [text, setText] = useState("");
  const [textItems, setTextItems] = useState([]);
  const [method, setMethod] = useState("ADD");
  const [editIndex, setEditIndex] = useState(-1);
  const handleInput = (e) => {
    setText(e);
  };
  const handleSave = () => {
    if (editIndex >= 0) {
      let tempItems = [...textItems];
      tempItems[editIndex] = text;
      setTextItems(tempItems);
      setEditIndex(-1);
      setMethod("ADD");
    } else {
      setTextItems((prev) => [...prev, text]);
    }
    setText("");
  };

  const handleEdit = (index) => {
    setMethod("UPDATE");
    setEditIndex(index);
    setText(textItems[index]);
  };
  return (
    <div className="App">
      <div>
        {method}
        <input
          onChange={(e) => handleInput(e.target.value)}
          value={text}
        />{" "}
        <button onClick={handleSave}> + </button>
      </div>
      {/* {text} */}
      {textItems?.length ? (
        textItems.map((item, index) => {
          return (
            <>
              <div>
                {item} <button onClick={() => handleEdit(index)}>Edit </button>{" "}
              </div>{" "}
            </>
          );
        })
      ) : (
        <span> No Items Added </span>
      )}
    </div>
  );
}
