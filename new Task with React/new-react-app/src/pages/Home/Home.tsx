import React from "react";
import "../../App.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const authorization = () => {
    console.log("authorization");
  };

  const logIn = () => {
    console.log("logIn");
  };

  return (
    <div>
      <Button 
        className="btnMenu"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Меню
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={authorization}>
          <NavLink to="registration">Регистрация</NavLink>
        </MenuItem>
        <MenuItem onClick={logIn}>
          <NavLink to="login">Войти</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>Закрыть меню</MenuItem>
      </Menu>
    </div>
  );
}
