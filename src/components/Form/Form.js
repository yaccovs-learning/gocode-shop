import React, { useEffect, useState } from "react";
import "./Form.css";

/**
 * 
 * @param {string} param0.fieldsArr[].id - Field ID
 * @param {string} param0.fieldsArr[].label - Field label
 * @param {string} param0.fieldsArr[].value - Field value
 * @param {string} param0.fieldsArr[].placeholder
 * @param {('select'|'text'|'number')} param0.fieldsArr[].type - Type of field
 * @param {string[]} param0.fieldsArr[].options - The options are consumed in the type "select"
 * @param {function[]} param0.fieldsArr[].checks - functions for checks, return True if Valid, else return string with reason.
 * @param {boolean} param0.fieldsArr[].require
 * @returns ReactElement
 */
const Form = ({ fieldsArr, setFormValues, formValues, submit, children }) => {
  const [errors, setErrors] = useState(<p className="errors"></p>);

const valuesInit = () =>{  const formValuesInit = {};
  for (const field of fieldsArr) {
    if (field.value) {
      formValuesInit[field.id] = field.value;
    } else if (field.type !== 'select') {
      formValuesInit[field.id] = field.type === "number" ? 0 : "";
    }
  }
  setFormValues(formValuesInit);
};
  useEffect(() => {
    valuesInit();
  }, []);

  const changeHandler = ({ id, type }, value) => {
    console.log(id, value, type, Number(value));
    if (type === "number") {
      value = Number(value);
    }

    const newFormValues = { ...formValues };
    newFormValues[id] = value;
    setFormValues(newFormValues);
  };

  const formElements = fieldsArr.map((item, index) => (
    <div key={index} className="field-wrapper">
      <label>{item.label}</label>
      {item.type === "select" ? (
        <select
          value={formValues[item.id] || "default"}
          onChange={(e) => {
            return changeHandler(item, e.target.value);
          }}
        >
          <option key="default" value="" >
            {" ==== "}
          </option>
          {item.options.map((opt, index) => (
            <option value={opt} key={index}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={item.type}
          value={formValues[item.id] || ""}
          placeholder={item.placeholder}
          onChange={(e) => {
            return changeHandler(item, e.target.value);
          }}
        ></input>
      )}
    </div>
  ));

  const handlerActionForms = () => {
    let isValid = true;
    setErrors([]);
    for (const field of fieldsArr) {
      console.log("field", field);
      if (field.require && !formValues[field.id]) {
        isValid = false;
        setErrors((prev) => {
            const newErrors = [
              ...prev,
              <li className="error" key={field.id}>
                The {field.id} field is require
              </li>,
            ];
            return newErrors;
          });
    } else {
        for (const check of field.checks) {
          const resultCheck = check(field.id, formValues[field.id]);
          if (resultCheck !== true) {
            isValid = false;
            setErrors((prev) => {
              const newErrors = [
                ...prev,
                <li className="error" key={resultCheck}>
                  {resultCheck}
                </li>,
              ];
              return newErrors;
            });
          }
        }
      }
    }
    if (!isValid) return false;

    submit.action(formValues);
    valuesInit();
  };

  return (
    <div className="form">
      <h1 className="title-form">{children}</h1>
      <div>{formElements}</div>
      <ul className="errors">{errors}</ul>
      <button onClick={handlerActionForms}>{submit.text}</button>
    </div>
  );
};

export default Form;
