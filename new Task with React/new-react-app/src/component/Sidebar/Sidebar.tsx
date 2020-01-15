import React from "react";
import { withRouter } from "react-router-dom";
import style from "./Sidebar.module.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import EmailIcon from "@material-ui/icons/Email";
import SettingsIcon from "@material-ui/icons/Settings";

class Sidebar extends React.Component<any, any> {
  render() {
    return (
      <div className={style.sidebar}>
        <div className={style.menu}>
          <ListItem button>
            <HomeRoundedIcon
              color="action"
              style={{ fontSize: 30, paddingRight: 5 }}
            />
            <ListItemText
              onClick={() => this.props.history.push("/profile")}
              primary="Моя страничка"
            />
          </ListItem>
          <Divider light />
          <ListItem button>
            <SupervisorAccountIcon
              color="action"
              style={{ fontSize: 30, paddingRight: 5 }}
            />
            <ListItemText
              onClick={() => this.props.history.push("/friends")}
              primary="Друзья"
            />
          </ListItem>
          <Divider light />
          <ListItem button>
            <EmailIcon
              color="action"
              style={{ fontSize: 30, paddingRight: 5 }}
            />
            <ListItemText
              onClick={() => this.props.history.push("/messages")}
              primary="Сообщения"
            />
          </ListItem>
          <Divider light />
          <ListItem button>
            <SettingsIcon
              color="action"
              style={{ fontSize: 30, paddingRight: 5 }}
            />
            <ListItemText
              onClick={() => this.props.history.push("/settings")}
              primary="Настройки"
            />
          </ListItem>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
