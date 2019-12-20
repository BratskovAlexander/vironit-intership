import React from "react";
import style from "./Home.module.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withRouter } from "react-router-dom";

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
      anchorEl: null
    };
  }

  handleClick = (event: any) => {
    this.setState({
      visible: true,
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      visible: false,
      anchorEl: null
    });
  };

  openMenu = (event: any) => {
    switch (event.target.innerHTML) {
      case "Регистрация":
        return this.props.history.push("/registration");
      case "Войти":
        return this.props.history.push("/login");
      case "Профиль":
        return this.props.history.push("/profile");
    }
  };

  render() {
    return (
      <>
        <header>
          <div className={style.menu}>
            <Button
              className={style.btnMenu}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              Меню
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              open={this.state.visible}
              onClose={this.handleClose}
              onClick={this.openMenu}
            >
              <MenuItem>
                <span>Регистрация</span>
              </MenuItem>
              <MenuItem>
                <span>Войти</span>
              </MenuItem>
              <MenuItem>
                <span>Профиль</span>
              </MenuItem>
            </Menu>
          </div>
        </header>
      </>
    );
  }
}

export default withRouter(Home);
