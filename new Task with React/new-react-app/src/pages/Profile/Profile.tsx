import React from "react";
import { withRouter } from "react-router-dom";
import service from "../../service/service";
import style from "./Profile.module.css";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem } from "@material-ui/core";
import ModalPage from "../../component/ModalPage/ModalPage";
import AdminPage from "../../component/Admin/AdminPage";
import Header from "../../component/Header/Header";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser } from "../../actions/userAction";
import { getAllUsers } from "../../actions/getAllUsers";

class Profile extends React.Component<any, any> {
  static propTypes: any;
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
      admin: {
        name: "",
        surname: "",
        login: "",
        password: "",
        cityID: ""
      },
      userList: false,
      updateUserData: {},
      city: [],
      modalWindowUpdate: false,
      modalWindowDelete: false
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
          modalWindowUpdate: true
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
        sessionStorage.removeItem("access-token");
        localStorage.removeItem("refresh-token");
        this.setState({
          modalWindowDelete: true
        });
      }
    } catch (error) {
      this.props.history.push("/profile");
    }
  };

  closeModalWindowUpdate = () => {
    this.setState({
      modalWindowUpdate: !this.state.modalWindowUpdate
    });
  };

  closeModalWindowDelete = () => {
    this.setState({
      modalWindowDelete: !this.state.modalWindowDelete
    });
  };

  getAllUsers = () => {
    if (this.state.user.login === "admin") {
      this.setState({
        userList: !this.state.userList
      });
    }
  };

  componentDidMount = async () => {
    const changeCity = await service.getCity();
    if (sessionStorage.getItem("access-token")) {
      const getAuthorizationUser = await service.getAuthorizationUser();
      const getAllUsers: any = await service.getAllUsers();
      this.props.setUserAction(getAuthorizationUser);
      this.props.setAllUsersAction(getAllUsers);
      if (getAuthorizationUser.login === "admin") {
        this.setState({
          admin: { ...getAuthorizationUser },
          city: changeCity
        });
      }
      this.setState({
        user: { ...getAuthorizationUser },
        city: changeCity
      });
    } else {
      this.props.history.push("/login");
    }
  };

  render() {
    return (
      <>
        <Header path={["/"]} items={["Главная"]} />
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
              {this.state.user.login === "admin" ? (
                <Button
                  className={style.btn}
                  onClick={this.getAllUsers}
                  variant="contained"
                >
                  Список пользователей
                </Button>
              ) : (
                ""
              )}
              {this.state.modalWindowUpdate ? (
                <ModalPage
                  message={`Пользователь ${this.state.user.name} обновлен `}
                  path="/profile"
                  nameBtn="ok"
                  closeModalWindow={this.closeModalWindowUpdate}
                />
              ) : (
                ""
              )}
              {this.state.modalWindowDelete ? (
                <ModalPage
                  message={`Пользователь ${this.state.user.name} удален `}
                  path="/login"
                  nameBtn="ok"
                  closeModalWindow={this.closeModalWindowDelete}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {this.state.userList ? <AdminPage /> : ""}
      </>
    );
  }
}

const mapStateToProps = (store: any) => {
  return {
    user: store.user,
    users: store.users
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUserAction: (user: any) => dispatch(getUser(user)),
    setAllUsersAction: (users: any) => dispatch(getAllUsers(users))
  };
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  setUserAction: PropTypes.func.isRequired,
  setAllUsersAction: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile));
