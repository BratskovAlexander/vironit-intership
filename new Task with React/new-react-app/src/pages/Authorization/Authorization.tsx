import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import style from "./Authorization.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import service from "../../components/service/service";

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      authorizationUserData: {
        login: "",
        password: ""
      },
      token: ""
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

  authorizationUser = async () => {
    try {
      const authorizationUser = await service.authorizationUser({
        ...this.state.authorizationUserData
      });
      console.log(authorizationUser);
      if(authorizationUser !== "Нет пользователя с таким Login") {
        sessionStorage.setItem("access-token", authorizationUser);
      this.props.history.push("/profile");
      } else {
        console.log("object");
        this.props.history.push("/error-registration");
      }
      
    } catch (error) {
      this.props.history.push("/error-registration");
    }
  };

  render() {
    return (
      <>
        <form className={style.form}>
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
            <Button onClick={this.authorizationUser} variant="contained">
              Войти
            </Button>
            <Button variant="contained">
              <NavLink className={style.textBtnBack} to="/">
                На главную
              </NavLink>
            </Button>
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(Login);
