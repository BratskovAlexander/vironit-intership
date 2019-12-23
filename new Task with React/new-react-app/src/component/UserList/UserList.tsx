import React from "react";
import style from "./UserList.module.css";

class UserList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: {
        name: "",
        surname: "",
        login: "",
        cityID: ""
      }
    };
  }

  render() {
    return (
      <>
        <div className={style.user}>
          <div className={style.blockImgAvatar}>
            <img
              className={style.imgAvatar}
              alt="avatar"
              src="https://st3.depositphotos.com/3236579/16813/v/1600/depositphotos_168136540-stock-illustration-beatiful-reindeer-avatar.jpg"
            />
          </div>
          <div className={style.dataUser}>
            <p>Имя: <span className={style.textDataUser}>{this.props.user.name}</span></p>
            <p>Фамилия: <span className={style.textDataUser}>{this.props.user.surname}</span></p>
            <p>Логин: <span className={style.textDataUser}>{this.props.user.login}</span></p>
            <p>Город: <span className={style.textDataUser}>{this.props.user.city}, {this.props.user.country}</span></p>
          </div>
        </div>
      </>
    );
  }
}

export default UserList;