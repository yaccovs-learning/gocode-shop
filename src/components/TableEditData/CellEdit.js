import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import TableCell from "@mui/material/TableCell";

const CellEdit = ({ value, field, changeHandler }) => {
  const [editable, setEditable] = useState(false);
  const [varValue, setVarValue] = useState(value);
  const input = useRef(null);
  console.log(123);
  const inputElement =
    field.type === "select" ? (
      <select
        ref={input}
        value={varValue || "default"}
        onChange={(e) => {
          setVarValue(e.target.value);
          return true;
        }}
      >
        <option key="default" value="">
          {" ==== "}
        </option>
        {field.options.map((opt, index) => (
          <option value={opt} key={index}>
            {opt}
          </option>
        ))}
      </select>
    ) : (
      <input
        ref={input}
        type={field.type}
        value={varValue || ""}
        placeholder={field.placeholder}
        onChange={(e) => {
          setVarValue(e.target.value);
          return true;
        }}
      ></input>
    );
  return (
    <TableCell>
      {editable ? (
        <>
          {inputElement}
          <Button
            onClick={() => {
              changeHandler(varValue) && setEditable(false);
            }}
          >
            Save
          </Button>
          <Button
            onClick={() => {
              setEditable(false);
            }}
          >
            Cancel
          </Button>
        </>
      ) : (
        <div  onClick={() => setEditable(true)}>{value}</div>
        )}
    </TableCell>
  );
};

export default CellEdit;
