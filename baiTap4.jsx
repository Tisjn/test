import { useState } from "react";

export default function BaiTap4() {
  const [test, setTest] = useState("");
  const [list, setList] = useState([]);

  function handleClick() {
    if (test.trim() !== "") {
      setList([...list, test]);
      setTest(""); // Xóa input sau khi thêm
    }
  }

  function handleDelete(index) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }

  return (
    <div>
      <h1>BaiTap4</h1>
      <div>
        <input 
          value={test} 
          onChange={(e) => setTest(e.target.value)} 
        />
      </div>
      <br />
      <button onClick={handleClick}>Add todo</button>
      <hr />
      <ul>
        {list.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: 10, margin: 10 }}>
            <li>{item}</li>
            <button onClick={() => handleDelete(index)}>delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
