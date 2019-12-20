import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import service from "../../service/service";
import Home from "../Home/Home";
import style from "./Profile.module.css";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem } from "@material-ui/core";
import ModalPageUpdate from "../../ModalPageUpdate";
import ModalPageDelete from "../../ModalPageDelete";

class Profile extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: {
        name: "",
        surname: "",
        login: "",
        password: "",
        cityID: ""
      },
      updateUserData: {},
      city: [],
      userUpdate: false,
      userDelete: false
    };
  }

  getValueInputName = (event: any) => {
    this.setState({
      user: {
        ...this.state.user,
        name: event.target.value
      },
      updateUserData: {
        ...this.state.updateUserData,
        name: event.target.value
      }
    });
  };

  getValueInputSurname = (event: any) => {
    this.setState({
      user: {
        ...this.state.user,
        surname: event.target.value
      },
      updateUserData: {
        ...this.state.updateUserData,
        surname: event.target.value
      }
    });
  };

  getValueInputLogin = (event: any) => {
    this.setState({
      user: {
        ...this.state.user,
        login: event.target.value
      },
      updateUserData: {
        ...this.state.updateUserData,
        login: event.target.value
      }
    });
  };

  getValueInputPassword = (event: any) => {
    this.setState({
      updateUserData: {
        ...this.state.updateUserData,
        password: event.target.value
      }
    });
  };

  getValueInputCity = (event: any) => {
    this.setState({
      user: {
        ...this.state.user,
        cityID: event.target.value
      },
      updateUserData: {
        ...this.state.updateUserData,
        cityID: event.target.value
      }
    });
  };

  updateUser = async () => {
    try {
      const updateUserData: any = await service.updateUser(
        this.state.user._id,
        {
          ...this.state.updateUserData
        }
      );
      if (updateUserData) {
        this.setState({
          userUpdate: true
        });
      }
    } catch (error) {
      this.props.history.push("/profile");
    }
  };

  deleteUser = async () => {
    try {
      const updateUserData: any = await service.deleteUser(this.state.user._id);
      if (updateUserData) {
        window.sessionStorage.removeItem("access-token");
        this.setState({
          userDelete: true
        });
      }
    } catch (error) {
      this.props.history.push("/error-registration");
    }
  };

  closeModalUpdateWindow = async () => {
    this.setState({
      userUpdate: !this.state.userUpdate
    });
  };

  closeModalDeleteWindow = async () => {
    this.setState({
      userDelete: !this.state.userDelete
    });
  };

  componentDidMount = async () => {
    const changeCity = await service.getCity();
    if (sessionStorage.getItem("access-token")) {
      const getAuthorizationUser: any = await service.getAuthorizationUser();
      this.setState({
        user: { ...getAuthorizationUser },
        city: changeCity
      });
      return getAuthorizationUser;
    } else {
      this.props.history.push("/error-registration");
    }
  };

  render() {
    return (
      <>
        <Home />
        <h1 className={style.header}>Привет {this.state.user.name}</h1>
        <div className={style.blockProfile}>
          <div className={style.blockImgAvatar}>
            <img
              className={style.imgAvatar}
              alt="avatar"
              src="https://st3.depositphotos.com/3236579/16813/v/1600/depositphotos_168136540-stock-illustration-beatiful-reindeer-avatar.jpg"
            />
          </div>
          <div className={style.dataUser}>
            <div>
              <TextField
                type="text"
                id="name"
                label="Имя"
                margin="normal"
                value={this.state.user.name}
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                onChange={this.getValueInputName}
              />
            </div>
            <div>
              <TextField
                type="text"
                id="surname"
                label="Фамилия"
                margin="normal"
                value={this.state.user.surname}
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                onChange={this.getValueInputSurname}
              />
            </div>
            <div>
              <TextField
                type="text"
                id="login"
                label="Логин"
                margin="normal"
                value={this.state.user.login}
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                onChange={this.getValueInputLogin}
              />
            </div>
            <div>
              <TextField
                type="password"
                id="password"
                label="Пароль"
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                onChange={this.getValueInputPassword}
              />
            </div>
            <div>
              <TextField
                select
                id="city"
                label="Город"
                margin="normal"
                value={this.state.user.cityID}
                onChange={this.getValueInputCity}
                helperText="Изменить город"
                variant="outlined"
              >
                {this.state.city.map((city: any, index: number) => (
                  <MenuItem key={index} value={city._id}>
                    {`${city.city}, ${city.country}`}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <Button
                className={style.btn}
                onClick={this.updateUser}
                variant="contained"
              >
                обновить
              </Button>
              <Button
                className={style.btn}
                onClick={this.deleteUser}
                variant="contained"
              >
                удалить
              </Button>
              <Button className={style.btn} variant="contained">
                <NavLink className={style.textBtnBack} to="/">
                  На главную
                </NavLink>
              </Button>
              {this.state.userUpdate ? (
                <ModalPageUpdate
                  closeModalUpdateWindow={this.closeModalUpdateWindow}
                />
              ) : (
                ""
              )}
              {this.state.userDelete ? (
                <ModalPageDelete
                  closeModalDeleteWindow={this.closeModalDeleteWindow}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Profile);
