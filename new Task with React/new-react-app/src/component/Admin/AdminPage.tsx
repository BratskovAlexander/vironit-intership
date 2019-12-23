import React from "react";
import { withRouter } from "react-router-dom";
import service from "../../service/service";
import style from "./AdminPage.module.css";
import { IUser } from "../../types/types";
import UserList from "../UserList/UserList";

class AdminPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      users: [],
      visible: false
    };
  }

  componentDidMount = async () => {
    const getAllUsers = await service.getAllUsers();
    if (getAllUsers) {
      this.setState({
        users: getAllUsers,
        visible: true
      });
    }
  };

  render() {
    return (
      <>
        <h2 className={style.header}>Список пользователей</h2>
          <div className={style.users}>
            {this.state.visible
              ? this.state.users.map((user: IUser) => (
                  <UserList key={user.login} user={user} />
                ))
              : null}
          </div>
      </>
    );
  }
}

export default withRouter(AdminPage);
