import React from "react";
import { withRouter, NavLink, Redirect } from "react-router-dom";
import style from "./Authorization.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ModalPage from "../../component/ModalPage/ModalPage";
import Header from "../../component/Header/Header";
import { connect } from "react-redux";
import { getAuthorizationUser } from "../../actions/userAction";
import { getAllCities } from "../../actions/getAllCitiesAction";

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
    this.props.setAuthorizationUser(this.state.authorizationUserData);
    this.props.setAuthorizationUser();
    this.props.getAllCities();
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
      <Redirect to="/user-profile" />
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

const mapStateToProps = (store: any) => {
  return {
    user: store.authorizationUserData,
    allCities: store.allCities.cities
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setAuthorizationUser: (body: any) => dispatch(getAuthorizationUser(body)),
    getAllCities: () => dispatch(getAllCities())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
