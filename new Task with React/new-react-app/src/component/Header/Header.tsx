// import React from 'react';
// import style from './Header.module.css'
// import { withRouter } from "react-router-dom";

// class Header extends React.Component<any, any> {

//     render() {
//         return(
//             <>

//             </>
//         )
//     }
// };

// export default Header;

import React from "react";
import style from "./Header.module.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withRouter } from "react-router-dom";

class Header extends React.Component<any, any> {
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
    for (let i = 0; i < this.props.items.length; i++) {
      switch (event.target.innerHTML) {
        case this.props.items[i]:
          return this.props.history.push(this.props.path[i]);
      }
      //   case  this.props.items[1] :
      //     return this.props.history.push(this.props.path[1]);
      //   case  this.props.items[2] :
      //     return this.props.history.push(this.props.path[2]);
      //   case  this.props.items[3] :
      //     return this.props.history.push(this.props.path[3]);
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
              {/* <MenuItem>
                <span>{this.props.items[0]}</span>
              </MenuItem>
              <MenuItem>
                <span>{this.props.items[1]}</span>
              </MenuItem> */}
              {this.props.items.map((item: string, idx: number) => (
                <MenuItem>
                  <span key={idx}>{item}</span>
                </MenuItem>
              ))}
            </Menu>
          </div>
        </header>
      </>
    );
  }
}

export default withRouter(Header);
