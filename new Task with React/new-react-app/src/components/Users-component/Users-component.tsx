// import { State } from "../../types/types";
import React from "react";
// import User from "../User/User";
// import "./Users.css";
// import getUsers from "../service/service";

class Users extends React.Component<any, any> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       userProfile: {},
//       selected: false,
//       allUsers: []
//     };
//   }
//   seeUser = (elem: any, event: any) => {
//     this.setState({
//       userProfile: elem,
//       selected: true
//     });
//   };

//   clearUser = () => {
//     this.setState({
//       selected: false
//     });
//   };

//    async componentDidMount () {
//     const allUsers = await getUsers();
//     this.setState({
//       allUsers: allUsers.data
//     })
//   };

//   render() {
//     return (
//       <div> 
//         <div className="allUser">
//           {this.state.allUsers.map((user: any, index: number) => (
//             <div
//               className="user"
//               key={index}
//               onClick={this.seeUser.bind(this, user)}
//             >
//               Hello, {user.name}
//             </div>
//           ))}
//         </div>
//         <div>
//           <User
//             thisUser={this.state.userProfile}
//             active={this.state.selected}
//             clearUser={this.clearUser}
//           />
//         </div>
//       </div>
//     );
//   }
}

export default Users;
