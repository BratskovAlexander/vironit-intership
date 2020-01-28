import React from "react";
import { withRouter, NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import style from "./Authorization.module.css";
import ModalPage from "../../component/ModalPage/ModalPage";
import Header from "../../component/Header/Header";
import { getAuthorizationUser } from "../../actions/userAction";

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      authorizationUserData: {
        login: "",
        password: ""
      },
      modalWindowErrorLogin: false,
      modalWindowErrorPassword: false
    };
  }

  getInputValue = (event: any) => {
    this.setState({
      authorizationUserData: {
        ...this.state.authorizationUserData,
        [event.target.id]: event.target.value
      }
    });
  };

  authorizationUser = (event: any) => {
    event.preventDefault();
    this.props.setAuthorizationUser(this.state.authorizationUserData);
  };

  closeModalWindowErrorLogin = () => {
    this.setState({
      modalWindowErrorLogin: !this.state.modalWindowErrorLogin
    });
  };

  closeModalWindowErrorPassword = () => {
    this.setState({
      modalWindowErrorPassword: !this.state.modalWindowErrorPassword
    });
  };

  render() {
    return sessionStorage.getItem("access-token") ? (
      <Redirect to="/profile" />
    ) : (
      <>
        <Header
          path={["/", "/registration"]}
          items={["Главная", "Регистрация"]}
        />
        <form className={style.form} onSubmit={this.authorizationUser}>
          <div className={style.divBlockRegistration}>
            <TextField
              required
              id="login"
              label="Login"
              value={this.state.authorizationUserData.login}
              variant="outlined"
              onChange={this.getInputValue}
            />
          </div>
          <div className={style.divBlockRegistration}>
            <TextField
              required
              id="password"
              label="Password"
              value={this.state.authorizationUserData.password}
              variant="outlined"
              onChange={this.getInputValue}
            />
          </div>
          <div className={style.btns}>
            <Button type="submit" variant="contained">
              Войти
            </Button>
            <Button variant="contained">
              <NavLink className={style.textBtnBack} to="/">
                На главную
              </NavLink>
            </Button>
          </div>
        </form>
        {this.state.modalWindowErrorLogin ? (
          <ModalPage
            message="Нет пользователя с таким логином "
            path="/login"
            nameBtn="ok"
            closeModalWindow={this.closeModalWindowErrorLogin}
          />
        ) : (
          ""
        )}
        {this.state.modalWindowErrorPassword ? (
          <ModalPage
            message="Неправильно ввели пароль "
            path="/login"
            nameBtn="ok"
            closeModalWindow={this.closeModalWindowErrorPassword}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setAuthorizationUser: (body: any) => dispatch(getAuthorizationUser(body))
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Login));
