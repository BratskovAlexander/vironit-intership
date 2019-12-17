import React from "react";
import Button from "@material-ui/core/Button";
import style from "./ErrorRegistration.module.css";

import { NavLink } from "react-router-dom";

class ErrorRegistration extends React.Component<any, any> {
  render() {
    return (
      <div className={style.blockMessage}>
        <h1>Попробуйте еще раз, вы что-то сделали не так!!!</h1>
        <div className={style.btnBack}>
          <Button variant="contained">
            <NavLink className={style.textBtnBack} to="registration">назад</NavLink>
          </Button>
        </div>
      </div>
    );
  }
}

export default ErrorRegistration;
