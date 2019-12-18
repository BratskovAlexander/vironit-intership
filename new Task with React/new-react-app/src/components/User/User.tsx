import React from "react";
import service from "../../components/service/service";
import styles from "./User.module.css";

class User extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: {}
    };
    
  }
  componentDidMount = async () => {
    console.log(this.state.user);
    console.log(this.props.thisUser);
    console.log(service.getAuthorizationUser);
    await service.getAuthorizationUser
    await this.setState({
      user: this.props.thisUser
    });
  };

  // clearUser() {
  //   console.log(this.props.thisUser);
  //   this.props.clearUser();
  // }
  render() {
    return (
      <>
        <div className={styles.user}>
          <p className={styles.elementUser}>{this.props.thisUser.name}</p>
          <p className={styles.elementUser}>{this.props.thisUser.surname}</p>
          <p className={styles.elementUser}>{this.props.thisUser.login}</p>
          <p className={styles.elementUser}>{this.props.thisUser.password}</p>
          <p className={styles.elementUser}>{this.props.thisUser.city}</p>
          <p className={styles.elementUser}>{this.props.thisUser.country}</p>
        </div>
        {/* <button className={styles.btnClear} onClick={this.clearUser}>
          Очистить
        </button> */}
      </>
    );
  }
}

export default User;
