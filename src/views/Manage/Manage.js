import React, { useContext, useState } from "react";
import Form from "../../components/Form/Form";
import StoreContext from "../../StoreContext";
import axios from "axios";
import TableEditData from "../../components/TableEditData/TableEditData";

const Manage = () => {
  const [formValues, setFormValues] = useState({});
  const { categories, listProducts, setListProducts } =
    useContext(StoreContext);

  const checkIfAboveZero = (id, value) => {
    if (Number(value) > 0) return true;
    return `${id} must be above 0`;
  };

  const checkIfLengthValid = (id, value, min, max) => {
    if (value && value.length <= max && value.length >= min) return true;
    return `The ${id} must be between ${min} and ${max} characters long`;
  };

  const fieldsArr = [
    {
      id: "title",
      label: "Title:",
      placeholder: "title",
      type: "text",
      checks: [
        (id, value) => {
          return checkIfLengthValid(id, value, 3, 30);
        },
      ],
      require: true,
    },
    {
      id: "description",
      label: "Description:",
      placeholder: "description",
      type: "text",
      checks: [
        (id, value) => {
          return checkIfLengthValid(id, value, 3, 60);
        },
      ],
    },
    {
      id: "price",
      label: "Price:",
      placeholder: "price",
      type: "number",
      checks: [checkIfAboveZero],
      require: true,
    },
    {
      id: "image",
      label: "Imgae Url:",
      placeholder: "image",
      type: "text",
      checks: [],
      require: true,
    },
    {
      id: "category",
      label: "Category:",
      placeholder: "category",
      type: "select",
      options: categories,
      checks: [],
      require: true,
    },
  ];

  const handlerAddProduct = async (formValuesEnd) => {
    const product = { ...formValuesEnd };
    product.rating = { rate: 0, count: 0 };
    const newProduct = await axios.post(
      "http://localhost:8000/api/products",
      product
    );
    setListProducts([product, ...listProducts]);
  };

  return (
    <>
      <div>
        Manage:
        <Form
          fieldsArr={fieldsArr}
          setFormValues={setFormValues}
          formValues={formValues}
          submit={{ text: "Add Product", action: handlerAddProduct }}
        >
          Enter new product details
        </Form>
      </div>
      <TableEditData fieldsArr={fieldsArr}/>
    </>
  );
};

export default Manage;
//  {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: { rate: 3.9, count: 120 },
//   }
