import React from "react";
import { withRouter } from "react-router-dom";
import style from "./Friends.module.css";
import { IUser } from "../../types/types";
import UserList from "../UserList/UserList";
import { connect } from "react-redux";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Louder from "../Louder/Louder";
import { getAllUsers } from "../../actions/getAllUsersAction";
import { store } from "../../store/configureStore";
import { getUser } from "../../actions/userAction";
import { getNewTokens } from "../../actions/getTokensActions";

class Friends extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: { ...this.props.users, cityID: "" },
      users: { ...this.props.listAllUsers },
      louder: true,
      pageSize: 3,
      totalUsersCount: this.props.listAllUsers.length,
      pageNumber: 1,
      pages: [],
      strIdx: 0
    };
  }

  getUserList = (event: any) => {
    let numberPage = Number(event.target.innerHTML);

    this.setState({
      strIdx: Number(numberPage * this.state.pageSize - 3)
    });
  };

  componentDidMount = () => {
    this.props.getUser();
    this.props.setAllUsersAction();
    store.subscribe(() => {
      if (store.getState().userData.user) {
        this.setState({
          louder: false,
          users: this.props.listAllUsers,
          totalUsersCount: this.props.listAllUsers.length
        });
        // this.state.users.forEach((user: any, idx: number) => {
        //   if (user.login === this.props.user.login) {
        //     this.props.allUsers.splice(idx, 1);
        //   }
        // });
      }

      let pageNumber = Math.ceil(this.state.users.length / this.state.pageSize);
      if (this.state.users.length > 3) {
        this.setState({
          pageNumber
        });
        for (let i = 1; i <= pageNumber; i++) {
          this.state.pages.push(i);
        }
      }
    });
    this.props.getTokens();
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
              {/* {this.state.visible ?  */}
              {/* {this.state.users.map((user: IUser) => (
                <UserList key={user.login} user={user} />
              ))} */}
              {/* : null} */}

              {this.state.pageNumber > 1 ? (
                <>
                  <div>
                    {this.props.listAllUsers
                      .slice(this.state.strIdx, this.state.strIdx + 3)
                      .map((user: IUser) => (
                        <UserList key={user.login} user={user} />
                      ))}
                  </div>
                  <div>
                    {this.state.pages.map((pages: any, idx: any) => (
                      <span onClick={this.getUserList} key={idx}>
                        {" "}
                        {pages}{" "}
                      </span>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </main>
      </>
    );
  }
}

const mapStateToProps = (store: any) => {
  return {
    user: store.userData.user,
    listAllUsers: store.listAllUsers.users
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setAllUsersAction: () => dispatch(getAllUsers()),
    getUser: () => dispatch(getUser()),
    getTokens: () => dispatch(getNewTokens())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Friends));
