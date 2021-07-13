import './UserList.css';
import React,{Component} from "react";

class UserList extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      users: []
    }
  }

  updateDate() {

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(result => {
  this.setState({users: result})
})
.catch((error) => {
  console.error('Error:', error);
});
   
  }
render() {
  const {users} = this.state;

  return(
    <>
    <button onClick={()=>this.updateDate() }className="btn btn-danger">User Data</button>
    <ul  className="list-group">
                       {users.map(item => (
                         <li className="list-group-item list-group-item-primary"  key={item.id}>
                           <h3>{item.name}</h3>
                           <p>username: {item.username}</p>
                           <p>email:{item.email}</p>
                           <p>Address: {item.address.street}, {item.address.suite},{item.address.city}
                           , {item.address.zipcode}</p>


                           <p>phone number: {item.phone}</p>
                           <p>website: {item.website}</p>
                           <p>company: {item.company.name}</p>

                           
                           </li>
                       ))}
                  </ul>
            
                         
    </>
  )
}


}

export default UserList