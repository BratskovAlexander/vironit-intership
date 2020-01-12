import React from "react";
import { withRouter } from "react-router-dom";
import service from "../../service/service";
import style from "./userProfile.module.css";
import Header from "../Header/Header";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser } from "../../actions/userAction";
import Sidebar from "../Sidebar/Sidebar";
import Louder from "../Louder/Louder";

class UserProfile extends React.Component<any, any> {
  static propTypes: any;
  constructor(props: any) {
    super(props);
    this.state = {
      user: { ...this.props.user, cityID: "" },
      louder: true
    };
  }

  componentDidMount = async () => {
    if (sessionStorage.getItem("access-token")) {
      const getAuthorizationUser = await service.getAuthorizationUser();
      this.props.setUserAction(getAuthorizationUser);
      this.setState({
        louder: false,
        user: { ...getAuthorizationUser }
      });
    }
  };

  render() {
    return this.state.louder ? (
      <Louder />
    ) : (
      <div>
        <Header />
        <main>
          <Sidebar />
          <div className={style.blockProfile}>
            <img
              className={style.imgAvatar}
              alt="avatar"
              src="https://klike.net/uploads/posts/2019-03/1551512876_4.jpg"
            />
            <div className={style.dataUser}>
              <span>Пользователь: </span>
              {this.props.userProfile.name} {this.props.userProfile.surname}
            </div>
            <div className={style.dataUser}>
              <span>Логин: </span>
              {this.props.userProfile.login}{" "}
            </div>
            <div className={style.dataUser}>
              <span>Место проживания: </span>
              {this.props.userProfile.city[0].city},{" "}
              {this.props.userProfile.city[0].country}{" "}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (store: any) => {
  console.log(store);
  return {
    userProfile: store.user.user
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUserAction: (user: any) => dispatch(getUser(user))
  };
};

UserProfile.propTypes = {
  user: PropTypes.object,
  setUserAction: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserProfile));
