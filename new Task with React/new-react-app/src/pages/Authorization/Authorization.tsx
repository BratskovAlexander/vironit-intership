import React from "react";
import { withRouter, NavLink, Redirect } from "react-router-dom";
import style from "./Authorization.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import service from "../../service/service";
import ModalPage from "../../component/ModalPage/ModalPage";
import Header from "../../component/Header/Header";

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      authorizationUserData: {
        login: "",
        password: ""
      },
      token: "",
      modalWindowErrorLogin: false,
      modalWindowErrorPassword: false
    };
  }

  getInputValue = async (event: any) => {
    this.setState({
      authorizationUserData: {
        ...this.state.authorizationUserData,
        [event.target.id]: event.target.value
      }
    });
  };

  authorizationUser = async (event: any) => {
    event.preventDefault();
    try {
      const authorizationUser = await service.authorizationUser({
        ...this.state.authorizationUserData
      });
      if (authorizationUser) {
        sessionStorage.setItem("access-token", authorizationUser);
        this.props.history.push("/profile");
      }
    } catch (error) {
      if (error.response.data.msg === "Нет пользователя с таким Login") {
        this.setState({
          modalWindowErrorLogin: true
        });
      }
      if (error.response.data.msg === "Неправильный пароль") {
        this.setState({
          modalWindowErrorPassword: true
        });
      }
    }
  };

  closeModalWindowErrorLogin = async () => {
    this.setState({
      modalWindowErrorLogin: !this.state.modalWindowErrorLogin
    });
  };

  closeModalWindowErrorPassword = async () => {
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
          path={["/registration", "/"]}
          items={["Регистрация", "Главная"]}
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

export default withRouter(Login);
