import { IUser } from "../../types/types";
import React from "react";
import { users } from "../../state";
import User from "../User/User";
import "./Users.css";

const allUsers: Array<IUser> = users;

class Users extends React.Component<any, IUser> {
  constructor(props: any) {
    super(props);
    this.state = {
      userProfile: {},
      selected: false
    };
  }
  seeUser = (elem: any, event: any) => {
    this.setState({
      userProfile: elem,
      selected: true
    });
  };

  clearUser = () => {
    this.setState({
      selected: false
    });
  };

  render() {
    return (
      <div>
        <div className="allUser">
          {allUsers.map((user: any, index: number) => (
            <div
              className="user"
              key={index}
              onClick={this.seeUser.bind(this, user)}
            >
              Hello, {user.name}
            </div>
          ))}
        </div>
        <div>
          <User
            thisUser={this.state.userProfile}
            active={this.state.selected}
            clearUser={this.clearUser}
          />
        </div>
      </div>
    );
  }
}

export default Users;
