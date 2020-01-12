import React from "react";
import style from "./ModalPage.module.css";

import { NavLink } from "react-router-dom";

class ModalPage extends React.Component<any, any> {
  render() {
    return (
      <div className={style.blockMessage}>
        <h1 className={style.message}>
          {this.props.message} {this.props.user}
        </h1>
        <div className={style.btnBack}>
          <div>
            <NavLink
              className={style.textBtnBack}
              onClick={this.props.closeModalWindow}
              to={this.props.path}
            >
              {this.props.nameBtn}
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalPage;
