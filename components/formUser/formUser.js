import React, { useEffect, useState } from "react";
const FormUser = ({ postUser, putUser, value, handleUpdateVal, getUsers }) => {
  const initialState = {
    name: "",
    age: "",
    salary: "",
    logged: false,
  };
  console.log("valueee", value);
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    setFormData(value);
  }, [value]);
  const { name, age, salary, logged } = formData;
  const handleChange = (e) => {
    if (e.target.name === "logged") {
      setFormData({
        ...formData,
        [e.target.name]: !logged,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    // setData([...data, formData]);
    console.log("formData", formData);
    if (value) {
      putUser(value._id, formData);
      setFormData(initialState);
      handleUpdateVal();
      getUsers();
    } else {
      postUser(formData);
      setFormData(initialState);
      handleUpdateVal();
      getUsers();
    }
  };
  return (
    <div className="formUser">
      <form onSubmit={(e) => handleSave(e)}>
        <label htmlFor="name">Name : </label>
        <input
          className="formUser_input"
          type="text"
          placeholder="enter the name"
          value={name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="age">Age : </label>

        <input
          className="formUser_input"
          type="number"
          placeholder="enter the age"
          value={age}
          name="age"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="salary">Salary : </label>

        <input
          className="formUser_input"
          type="number"
          placeholder="enter the salary"
          name="salary"
          onChange={handleChange}
          value={salary}
        />
        <br />
        <label htmlFor="logged">logged : </label>

        <input
          type="checkbox"
          name="logged"
          onChange={handleChange}
          checked={logged}
          value={logged}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormUser;
