import React from "react";
import style from "./userProfile.module.css";
import Header from "../Header/Header";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sidebar from "../Sidebar/Sidebar";
import Louder from "../Louder/Louder";
import { getUser } from "../../actions/userAction";
import { store } from "../../store/configureStore";

class UserProfile extends React.Component<any, any> {
  static propTypes: any;
  constructor(props: any) {
    super(props);
    this.state = {
      user: {},
      louder: true,
      city: []
    };
  }

  componentDidMount = () => {
    if (this.props.user) {
      this.setState({
        louder: false
      });
    }
    store.subscribe(() => {
      if (store.getState().userData.user !== this.props.user) {
        this.setState({
          louder: false
        });
      }
    });
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
              {this.props.user.name} {this.props.user.surname}
            </div>
            <div className={style.dataUser}>
              <span>Логин: </span>
              {this.props.user.login}{" "}
            </div>
            <div className={style.dataUser}>
              <span>Место проживания: </span>
              Пока нигде
              {/* это капец.... все подтягивается из пропсов, а города нет =( */}
              {/* {store.getState().userData.user.city[0].city},{" "}
              {store.getState().userData.user.city[0].country} */}
              {/* {this.props.user.city},{" "} */}
              {/* {this.props.user.city[0].country} */}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (store: any) => {
  return {
    user: store.userData.user
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUser: () => dispatch(getUser())
  };
};

UserProfile.propTypes = {
  user: PropTypes.object,
  getUser: PropTypes.func,
  getTokens: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
