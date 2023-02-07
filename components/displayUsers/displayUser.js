import React, { useState } from "react";
import { getUsers, postUser, putUser } from "../../lib/helper";
import { useQuery } from "react-query";
import FormUser from "../formUser/formUser";
const DisplayUser = () => {
  // getUsers().then((res) => {
  //   console.log("res", res);
  // });
  const [value, setValue] = useState("");

  const handleUpdateVal = () => {
    setValue("");
  };
  const { data, error, isLoading, isError } = useQuery("users", getUsers);
  if (isLoading) return <div>data is loading</div>;
  if (isError) return <div>{error}</div>;
  return (
    <div className="table">
      <FormUser
        postUser={postUser}
        value={value}
        putUser={putUser}
        handleUpdateVal={handleUpdateVal}
        getUsers={getUsers}
      />

      <table>
        <tbody>
          <tr className="tableHead">
            <th>Name</th>
            <th>Age</th>
            <th>salary</th>
            <th>loggedIn</th>
          </tr>
        </tbody>

        {data?.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.salary}</td>
              <td>{val.logged}</td>
              <td>
                <button onClick={() => setValue(val)}>Edit</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default DisplayUser;
