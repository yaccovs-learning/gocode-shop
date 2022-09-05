import React, { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StoreContext from "../../StoreContext";
import axios from "axios";

const TableEditData = ({ fieldsArr }) => {
  const { listProducts, setListProducts, changeListProducts } = useContext(StoreContext);
  const [change, setChange] = useState(true);
  const rows = listProducts;

  const changeData = async (index, field, value) => {
    let change = {};
    console.log(index, field, value);
    if (field.type === "number") {
      value = Number(value);
      console.log(value);
      if (isNaN(Number(value))) return;
    }
    change[field.id] = value;
    const response = await axios.put(
      `http://127.0.0.1:8000/api/products/${listProducts[index]._id}`,
      change
    );
    const changeProduct = response.data;
    const prevListProducts = [...listProducts];
    prevListProducts[index] = changeProduct;

    setListProducts(prevListProducts);
  };


  const formElements = (row,indexInProducts) => {
    return fieldsArr.map((field, index) => (
      <TableCell key={field.id}>
        {field.type === "select" ? (
          <select
            value={row[field.id] || "default"}
            onChange={(e) => {
              return changeData(indexInProducts, field, e.target.value);
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
            type={field.type}
            value={row[field.id] || ""}
            placeholder={field.placeholder}
            onChange={(e) => {
              return changeData(indexInProducts, field, e.target.value);
            }}
          ></input>
        )}
      </TableCell>
    ));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              {fieldsArr.map((field) => (
                <TableCell key={field.id}>{field.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                {formElements(row, index)}
                {/* {fieldsArr.map((field) => (
                  <TableCell key={field.id}>
                    <input
                      value={row[field.id]}
                      onChange={(e) => {
                        changeData(index, field, e.target.value, field.type);
                        // this.value=row[field.id];
                      }}
                    />
                  </TableCell>
                ))} */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableEditData;
