import { useEffect } from "react";
import { connect } from "react-redux";
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  userError
} from "../store/actions/users";
import UserList from "./UserList";
import NewUserForm from "./NewUserForm";
import {Alert} from 'reactstrap';
// function* testing(){
//   while(true){
//   yield 1;
//   yield 2;
//   yield 3;
//   }
// }
function App({ getUsersRequest, deleteUserRequest, createUserRequest, userError,users }) {
  useEffect(() => {
    getUsersRequest();
  }, []);
  // const iterator=testing()
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());
  // console.log(iterator.next());
  const handleSubmit = (fName, lName) => {
    createUserRequest({ firstName: fName, lastName: lName });
  };
  const handleDelete = ({ userId }) => {
    console.log(userId);
    deleteUserRequest({ userId });
  };
  console.log(users);
  return (
    <div className="container mt-5 mb-5">
      <Alert color="danger" isOpen={!!users.error} toggle={()=>userError('')}>
       {users.error}
      </Alert>
      <NewUserForm onSubmit={handleSubmit} />
      <UserList onDelete={handleDelete} users={users.items} />
    </div>
  );
}

export default connect(({ users }) => ({ users }), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  userError
})(App);
