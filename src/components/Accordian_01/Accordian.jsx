import React, { useState } from "react";
import ColorGenerator from "../ColorGenerator/ColorGenerator";

const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library for building fast and reusable user interfaces.",
  },
  {
    id: 2,
    title: "What is JSX?",
    content:
      "JSX is a syntax extension for JavaScript that allows writing HTML inside JavaScript.",
  },
  {
    id: 3,
    title: "What is Virtual DOM?",
    content:
      "Virtual DOM is a lightweight copy of the real DOM that improves performance.",
  },
  {
    id: 4,
    title: "What are components in React?",
    content:
      "Components are reusable, independent pieces of UI that return JSX.",
  },
  {
    id: 5,
    title: "What are props?",
    content:
      "Props are inputs passed from parent to child components to make components dynamic.",
  },
  {
    id: 6,
    title: "What is state?",
    content:
      "State is a built-in object used to store data that can change over time in a component.",
  },
  {
    id: 7,
    title: "What are hooks?",
    content:
      "Hooks let you use state and other React features in functional components.",
  },
  {
    id: 8,
    title: "What is useEffect?",
    content:
      "useEffect is a hook that runs side effects such as data fetching or subscriptions.",
  },
  {
    id: 9,
    title: "What is key in React?",
    content:
      "Keys help React identify which items have changed, added, or removed in a list.",
  },
  {
    id: 10,
    title: "What is controlled component?",
    content:
      "A controlled component is a form element whose value is controlled by React state.",
  },
];

const Accordian = () => {
  const [selected, setSelected] = useState(null);
const [isMulti,setIsMulti]=  useState(false)
const [multiSelected,setMultiSelected]=  useState([])
  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };

  const handelMulti=(currentId)=>{
    
    let copyMulti = [...multiSelected];
    const findCurrentId =  copyMulti.indexOf(currentId);
    if(findCurrentId === -1) copyMulti.push(currentId);
    else copyMulti.splice(findCurrentId,1);
    setMultiSelected(copyMulti)
    console.log(findCurrentId);
  }
  return (
    <div
      style={{
        width: "400px",
        margin: "40px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
<div style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
  <button
   onClick={()=>setIsMulti(!isMulti)}
  >
    {isMulti?"Enable Multi Selection" :" Desable Multi Selection"}
  </button>
</div>
      <h1 style={{ textAlign: "center" }}>Accordion</h1>

      {accordionData.map((data) => (
        <div
          key={data.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          {/* Header */}
          <div
            onClick={isMulti? ()=>handelMulti(data.id) :() => handleSingleSelection(data.id)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <h6 style={{ margin: 0 }}>{data.title}</h6>
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              {selected === data.id ? "-" : "+"}
            </span>
          </div>

         {(isMulti
  ? multiSelected.includes(data.id)
  : selected === data.id) && (
  <p style={{ marginTop: "10px", color: "#555" }}>
    {data.content}
  </p>
)}

        </div>
      ))}
    </div>
  );
};

export default Accordian;
