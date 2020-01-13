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
import { getUser } from "../../actions/getUserAction";
import { store } from "../../store/configureStore";

class AdminPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: { ...this.props.user, cityID: "" },
      users: { ...this.props.usersData },
      visible: false,
      louder: true
    };
  }

  componentDidMount = async () => {
    this.props.setUserAction();
    this.props.setAllUsersAction();
    store.subscribe(() => {
      if (store.getState().usersData.users) {
        this.setState({
          louder: false,
          users: store.getState().usersData.users,
          visible: true
        });
      }
    });

    store.getState().usersData.users.forEach((user: any, idx: number) => {
      if (user.login === this.props.userProfile.login) {
        this.state.users.splice(idx, 1);
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
                ? store
                    .getState()
                    .usersData.users.map((user: IUser) => (
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
    setUserAction: (body: any) => dispatch(getUser(body)),
    setAllUsersAction: () => dispatch(getAllUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AdminPage));
