import React from "react";
import { withRouter } from "react-router-dom";
import service from "../../service/service";
import style from "./AdminPage.module.css";
import { IUser } from "../../types/types";
import UserList from "../UserList/UserList";
import { connect } from "react-redux";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Louder from "../Louder/Louder";

class AdminPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      users: { ...this.props.users },
      visible: false,
      louder: true
    };
  }

  componentDidMount = async () => {
    const getAllUsers = await service.getAllUsers();
    getAllUsers.forEach((user: any, idx: number) => {
      if (user.login === this.props.userProfile.login) {
        getAllUsers.splice(idx, 1);
      }
    });
    if (getAllUsers) {
      this.setState({
        louder: false,
        users: getAllUsers,
        visible: true
      });
    }
  };

  render() {
    return this.state.louder ? (
      <Louder />
    ) : (
      <>
        <Header />
        <main>
          <Sidebar />
          <div className={style.blockPage}>
            <h2 className={style.header}>Список пользователей</h2>
            <div className={style.users}>
              {this.state.visible
                ? this.state.users.map((user: IUser) => (
                    <UserList key={user.login} user={user} />
                  ))
                : null}
            </div>
          </div>
        </main>
      </>
    );
  }
}

const mapStateToProps = (store: any) => {
  return {
    userProfile: store.user.user,
    allUsers: store.users.users
  };
};

export default connect(mapStateToProps)(withRouter(AdminPage));
