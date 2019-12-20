import React from "react";
import Button from "@material-ui/core/Button";
import style from "../src/pages/ErrorRegistration/ErrorRegistration.module.css";

import { NavLink } from "react-router-dom";

class ModalPageDelete extends React.Component<any, any> {
  render() {
    return (
      <div className={style.blockMessage}>
        <h1>Пользователь удален!!!</h1>
        <div className={style.btnBack}>
          <Button variant="contained">
            <NavLink className={style.textBtnBack} to="/">На главную</NavLink>
          </Button>
        </div>
      </div>
    );
  }
}

export default ModalPageDelete;