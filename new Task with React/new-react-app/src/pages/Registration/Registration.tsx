import React from "react";
import { withRouter, NavLink, Redirect } from "react-router-dom";
import style from "./Registration.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import ModalPage from "../../component/ModalPage/ModalPage";
import Header from "../../component/Header/Header";
import { connect } from "react-redux";
import { getAllCities } from "../../actions/getAllCitiesAction";
import service from "../../service/service";

class Registration extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      registrationUserData: {
        name: "",
        surname: "",
        login: "",
        password: "",
        cityID: ""
      },
      modalWindow: false,
      modalWindowError: false
    };
  }

  getValueInput = (event: any) => {
    this.setState({
      registrationUserData: {
        ...this.state.registrationUserData,
        [event.target.id]: event.target.value
      }
    });
  };

  createNewUser = async () => {
    try {
      const registrationUser = await service.registrationUser(
        this.state.registrationUserData
      );
      if (registrationUser) {
        this.setState({
          modalWindow: true
        });
      }
    } catch (error) {
      this.setState({
        modalWindow: true
      });
    }
  };

  closeModalWindow = async () => {
    this.setState({
      modalWindowError: false,
      modalWindow: false
    });
  };

  handleChange = (event: any) => {
    this.setState({
      registrationUserData: {
        ...this.state.registrationUserData,
        cityID: event.target.value
      }
    });
  };

  componentDidMount = () => {
    this.props.getAllCities();
  };

  render() {
    return sessionStorage.getItem("access-token") ? (
      <Redirect to="/user-profile" />
    ) : (
      <>
        <Header path={["/", "/login"]} items={["Главная", "Войти"]} />
        <form className={style.form}>
          <h2>Регистрация пользователя</h2>
          <div className={style.divBlockRegistration}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              value={this.state.registrationUserData.name}
              onChange={this.getValueInput}
            />
            <TextField
              id="surname"
              label="SurName"
              variant="outlined"
              value={this.state.registrationUserData.surname}
              onChange={this.getValueInput}
            />
            <TextField
              id="login"
              label="Login"
              variant="outlined"
              value={this.state.registrationUserData.login}
              onChange={this.getValueInput}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              value={this.state.registrationUserData.password}
              onChange={this.getValueInput}
            />
            <TextField
              select
              value={this.state.registrationUserData.cityID}
              onChange={this.handleChange}
              helperText="Выберите город"
              variant="outlined"
            >
              {this.props.allCities.map((city: any) => (
                <MenuItem key={city.city} value={city._id}>
                  {`${city.city}, ${city.country}`}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className={style.btns}>
            <Button onClick={this.createNewUser} variant="contained">
              Зарегистрироваться
            </Button>
            <Button variant="contained">
              <NavLink className={style.textBtnBack} to="/">
                На главную
              </NavLink>
            </Button>
            {this.state.modalWindow ? (
              <ModalPage
                message="Добро пожаловать "
                user={this.state.registrationUserData.name}
                path="/login"
                nameBtn="ok"
                closeModalWindow={this.closeModalWindow}
              />
            ) : (
              ""
            )}
            {this.state.modalWindowError ? (
              <ModalPage
                message="Вы допустили ошибку, проверьте введенные данные "
                path="/registration"
                nameBtn="ok"
                closeModalWindow={this.closeModalWindow}
              />
            ) : (
              ""
            )}
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = (store: any) => {
  return {
    allCities: store.allCities.cities
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAllCities: () => dispatch(getAllCities())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Registration));
