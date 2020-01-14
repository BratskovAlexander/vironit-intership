import React from "react";
import { withRouter } from "react-router-dom";
import style from "./AdminPage.module.css";
import { IUser } from "../../types/types";
import UserList from "../UserList/UserList";
import { connect } from "react-redux";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Louder from "../Louder/Louder";
import { getAllUsers } from "../../actions/getAllUsersAction";
import { getUser } from "../../actions/userAction";
import { store } from "../../store/configureStore";

class AdminPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: { ...this.props.user, cityID: "" },
      users: { ...this.props.allUsers },
      visible: false,
      louder: true
    };
  }

  componentDidMount = () => {
    this.props.setUserAction();
    this.props.setAllUsersAction();
    store.subscribe(() => {
      if (store.getState().usersData) {
        this.setState({
          louder: false,
          users: this.props.allUsers,
          visible: true
        });
        this.state.users.forEach((user: any, idx: number) => {
          if (user.login === this.props.userProfile.login) {
            this.props.allUsers.splice(idx, 1);
          }
        });
      }
    });
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
    userProfile: store.userData.user,
    allUsers: store.usersData.users
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUserAction: () => dispatch(getUser()),
    setAllUsersAction: () => dispatch(getAllUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AdminPage));