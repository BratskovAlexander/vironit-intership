import React from "react";
import style from "./Registration.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import service from "../../components/service/service";

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
      city: []
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
      await service.registration({ ...this.state.registrationUserData });
      document.location.href = "/";
    } catch (error) {
      return (document.location.href = "error-registration");
    }
  };

  async componentDidMount() {
    const changeCity = await service.getCity();
    this.setState({
      city: changeCity
    });
  }

  handleChange = (event: any) => {
    this.setState({
      registrationUserData: {
        ...this.state.registrationUserData,
        cityID: event.target.value
      }
    });
  };

  render() {
    return (
      <>
        <form className={style.form}>
          <h2>Регистрация пользователя</h2>
          <div className={style.divBlockRegistration}>
            <TextField
              className="inputRegistration"
              id="name"
              label="Name"
              variant="outlined"
              value={this.state.registrationUserData.name}
              onChange={this.getValueInput}
            />
            <TextField
              className="inputRegistration"
              id="surname"
              label="SurName"
              variant="outlined"
              value={this.state.registrationUserData.surname}
              onChange={this.getValueInput}
            />
            <TextField
              className="inputRegistration"
              id="login"
              label="Login"
              variant="outlined"
              value={this.state.registrationUserData.login}
              onChange={this.getValueInput}
            />
            <TextField
              className="inputRegistration"
              id="password"
              label="Password"
              variant="outlined"
              value={this.state.registrationUserData.password}
              onChange={this.getValueInput}
            />
            <TextField
              className="inputRegistration"
              select
              label="Город"
              
              value={this.state.registrationUserData.cityID}
              onChange={this.handleChange}
              helperText="Выберите город"
            >
              {this.state.city.map((city: any) => (
                <MenuItem key={city.city} value={city._id}>
                  {`${city.city}, ${city.country}`}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Button onClick={this.createNewUser} variant="contained">
            Зарегистрироваться
          </Button>
        </form>
      </>
    );
  }
}

export default Registration;
