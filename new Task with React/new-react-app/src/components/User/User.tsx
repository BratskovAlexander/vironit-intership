import React from "react";
import styles from "./User.module.css";

class User extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.clearUser = this.clearUser.bind(this);
    this.state = {
      selected: props.active
    };
  }
  componentDidMount = async () => {
    await this.setState({
      user: this.props.thisUser
    });
  };
  clearUser() {
    this.props.clearUser();
  }
  render() {
    return (
      <>
        {this.props.active ? (
          <div className={styles.user}>
            <p className={styles.elementUser}>{this.props.thisUser.name}</p>
            <p className={styles.elementUser}>{this.props.thisUser.surname}</p>
            <p className={styles.elementUser}>{this.props.thisUser.cityID}</p>
            <p className={styles.elementUser}>{this.props.thisUser.login}</p>
            <p className={styles.elementUser}>{this.props.thisUser.password}</p>
          </div>
        ) : null}
        <button className={styles.btnClear} onClick={this.clearUser}>
          Очистить
        </button>
      </>
    );
  }
}

export default User;
