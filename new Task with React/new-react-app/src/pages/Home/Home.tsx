import React from "react";
// import style from "./Home.module.css";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
import { withRouter } from "react-router-dom";
import Header from "../../component/Header/Header";

class Home extends React.Component<any, any> {
  // constructor(props: any) {
  //   super(props);
  //   console.log(props.items)
  //   this.state = {
  //     visible: false,
  //     anchorEl: null
  //   };
  // }

  // handleClick = (event: any) => {
  //   this.setState({
  //     visible: true,
  //     anchorEl: event.currentTarget
  //   });
  // };

  // handleClose = () => {
  //   this.setState({
  //     visible: false,
  //     anchorEl: null
  //   });
  // };

  // openMenu = (event: any) => {
  //   switch (event.target.innerHTML) {
  //     case this.props.items[0] : 
  //       return this.props.history.push("/registration");
  //     case  this.props.items[1] :
  //       return this.props.history.push("/");
  //     case "Профиль":
  //       return this.props.history.push("/profile");
  //   }
  // };

  render() {
    return (
      <>
        <Header path={['/registration', '/login']} items={["Регистрация", 'Войти']} /> 
          {/* <div className={style.menu}>
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
                <span>{this.props.items[0]}</span>
              </MenuItem>
              <MenuItem>
                <span>{this.props.items[1]}</span>
              </MenuItem>
              <MenuItem>
                <span>Профиль</span>
              </MenuItem>
            </Menu>
          </div> */}
      </>
    );
  }
}

export default withRouter(Home);
