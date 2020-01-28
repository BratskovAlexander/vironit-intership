import React from "react";
import style from "./userProfile.module.css";
import Header from "../Header/Header";
import { connect } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import Louder from "../Louder/Louder";
import { store } from "../../store/configureStore";

class UserProfile extends React.Component<any, any> {
  static propTypes: any;
  constructor(props: any) {
    super(props);
    this.state = {
      user: {},
      louder: true,
      city: ""
    };
  }

  componentDidMount = () => {
    if (this.props.user.city) {
      this.setState({
        louder: false,
        city: this.props.user.city[0]
      });
    }
    store.subscribe(() => {
      if (store.getState().userData.user.city !== this.props.user.city) {
        this.setState({
          city: store.getState().userData.user.city[0],
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
              {this.state.city.city}, {this.state.city.country},{" "}
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

export default connect(mapStateToProps)(UserProfile);
