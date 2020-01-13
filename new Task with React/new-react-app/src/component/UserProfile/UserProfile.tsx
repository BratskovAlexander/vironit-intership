import React from "react";
import { withRouter } from "react-router-dom";
import style from "./userProfile.module.css";
import Header from "../Header/Header";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser } from "../../actions/getUserAction";
import Sidebar from "../Sidebar/Sidebar";
import Louder from "../Louder/Louder";
import { store } from "../../store/configureStore";

class UserProfile extends React.Component<any, any> {
  static propTypes: any;
  constructor(props: any) {
    super(props);
    this.state = {
      user: { ...this.props.userProfile, cityID: "" },
      louder: true
    };
   
  }

  componentDidMount = () => {
    if (sessionStorage.getItem("access-token")) {
      this.props.setUserAction();
    store.subscribe(()=>{
      if (store.getState().authorizationUserData.userProfile) {
         this.setState({
        louder: false,
      });
      }
    })    
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
              {store.getState().userData.user.city[0].city}, {" "}
              {store.getState().userData.user.city[0].country}
              {/* {this.props.userProfile.city[0].city},{" "}
              {this.props.userProfile.city[0].country}{" "} */}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (store: any) => {
  console.log(store.authorizationUserData.userProfile);
  return {
    userProfile: store.authorizationUserData.userProfile
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUserAction: (body: any) => dispatch(getUser(body))
  };
};

UserProfile.propTypes = {
  userProfile: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserProfile));
