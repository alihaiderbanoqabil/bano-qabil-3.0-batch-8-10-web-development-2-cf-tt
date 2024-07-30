import { useState } from "react";

export function ChildComponent({ sendDataToParent }) {
  const [name, setName] = useState("")

  function handleClick() {
    sendDataToParent(name);
  }
  
  console.log({ name });

  return (
    <div>
      <input type="text" value={name} onChange={(e) => {
        setName(e.target.value)
        sendDataToParent(e.target.value);
      }} />
      <button onClick={handleClick}>Send Name to Parent</button>
    </div>
  );
}
