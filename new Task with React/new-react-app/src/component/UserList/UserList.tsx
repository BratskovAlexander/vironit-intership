import React from "react";
import style from "./UserList.module.css";
import { connect } from "react-redux";
import service from "../../service/service";
import { getAllUsers } from "../../actions/getAllUsers";

class UserList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataUser: false
    };
  }

  seeDataUser = () => {
    this.setState({
      dataUser: !this.state.dataUser
    });
  };

  componentDidMount = async () => {
    const getAllUsers = await service.getAllUsers();
    this.props.setAllUsersAction(getAllUsers);
  };

  render() {
    return (
      <>
        <div onClick={this.seeDataUser} className={style.user}>
          <div className={style.blockImgAvatar}>
            <img
              className={style.imgAvatar}
              alt="avatar"
              src="https://klike.net/uploads/posts/2019-03/1551512876_4.jpg"
            />
          </div>
          <div className={style.dataUser}>
            <p>
              <span className={style.textDataUser}>
                {this.props.user.surname} {this.props.user.name}
              </span>
            </p>
            {this.state.dataUser ? (
              <span>
                <p>
                  Логин:{" "}
                  <span className={style.textDataUser}>
                    {this.props.user.login}
                  </span>
                </p>
                <p>
                  Город:{" "}
                  <span className={style.textDataUser}>
                    {this.props.user.city}, {this.props.user.country}
                  </span>
                </p>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (store: any) => {
  return {
    allUsers: store.users.users
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setAllUsersAction: (users: any) => dispatch(getAllUsers(users))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
