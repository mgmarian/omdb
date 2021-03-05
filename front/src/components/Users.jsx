import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/users";


const Users = () => {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(getUsers());
  }, []);

  const users = useSelector((state) => state.users);


  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Favourites</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id} className="table-secondary">
              <th scope="row">{user.name}</th>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>---</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Users;
