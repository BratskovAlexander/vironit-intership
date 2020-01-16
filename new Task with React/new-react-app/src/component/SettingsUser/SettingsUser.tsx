import React from "react";
import { withRouter } from "react-router-dom";
import style from "./SettingsUser.module.css";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem } from "@material-ui/core";
import ModalPage from "../ModalPage/ModalPage";
import Header from "../Header/Header";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser, updateUser, deleteUser } from "../../actions/userAction";
import Sidebar from "../Sidebar/Sidebar";
import Louder from "../Louder/Louder";
import { store } from "../../store/configureStore";
import { getAllCities } from "../../actions/citiesAction";

class SettingsUser extends React.Component<any, any> {
  static propTypes: any;
  constructor(props: any) {
    super(props);
    this.state = {
      user: { ...this.props.user, cityID: "" },
      louder: true,
      updateUserData: {},
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

  updateUser = () => {
    try {
      this.props.updateUser(this.state.user._id, {
        ...this.state.updateUserData
      });
      store.subscribe(() => {
        if (store.getState().updateUserData) {
          this.setState({
            modalWindowUpdate: true
          });
        }
      });
    } catch (error) {
      this.props.history.push("/profile");
    }
  };

  deleteUser = () => {
    try {
      this.props.deleteUser(this.state.user._id);
      this.props.history.push("/login");
      store.subscribe(() => {
        if (store.getState().user) {
          this.setState({
            modalWindowDelete: true
          });
        }
      });
    } catch (error) {
      this.props.history.push("/login");
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

  componentDidMount = () => {
    this.props.getUser();
    this.props.getAllCities();
    this.setState({
      user: this.props.user
    });
    store.subscribe(() => {
      if (this.props.user  !== store.getState().userData.user) {
        this.setState({
          louder: false
        });
      }
    });



    // console.log("до условия", store.getState().userData.user);
    // console.log("до условия",this.props.user);
    // if (sessionStorage.getItem("access-token")) {
      
    //   this.props.getUser();
    //   store.subscribe(() => {
      
    //   console.log("в условии",store.getState().userData.user);
    //   console.log("в условии",this.props.user);  
      
    //   if (this.props.user.name  !== store.getState().userData.user.name) {
          
    //     console.log("в в субскрайбе",store.getState().userData.user);
    //     console.log("в в субскрайбе",this.props.user);
    //       this.setState({
    //         louder: false
    //       });
    //     } else {
    //       console.log("in else");
    //       this.setState({
    //         louder: false
    //       });
    //     }
    //   });
    // }




  }

  componentWillUnmount = () => {};

  render() { 
    return this.state.louder ? (
      <Louder />
    ) : (
      <div>
        <Header />
        <main>
          <Sidebar />
          <div className={style.blockProfile}>
            <div className={style.blockImgAvatar}>
              <img
                className={style.imgAvatar}
                alt="avatar"
                src="https://klike.net/uploads/posts/2019-03/1551512876_4.jpg"
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
                  {/* {this.props.listAllCities.map((city: any, index: number) => (
                    <MenuItem key={index} value={city._id}>
                      {`${city.city}, ${city.country}`}
                    </MenuItem>
                  ))} */}

                  {this.props.listAllCities.map((city: any) => (
                    <MenuItem key={city.city} value={city._id}>
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
        </main>
      </div>
    );
  }
}

const mapStateToProps = (store: any) => {
  return {
    user: store.userData.user,
    listAllCities: store.listAllCities.cities
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUser: () => dispatch(getUser()),
    getAllCities: () => dispatch(getAllCities()),
    updateUser: (id: any, body: any) => dispatch(updateUser(id, body)),
    deleteUser: (id: any) => dispatch(deleteUser(id))
  };
};

SettingsUser.propTypes = {
  userProfile: PropTypes.object,
  allCities: PropTypes.array,
  setUserAction: PropTypes.func,
  getAllCities: PropTypes.func,
  updateUser: PropTypes.func,
  deleteUser: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SettingsUser));
