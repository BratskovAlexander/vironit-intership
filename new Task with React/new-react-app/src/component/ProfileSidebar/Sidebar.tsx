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
import { connect } from "react-redux";
import { getUser } from "../../actions/userAction";
import { getAllUsers } from "../../actions/getAllUsers";  
import AdminPage from "../Admin/AdminPage";

class Sidebar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      userList: false
    };
  }

  seeProfile = () => {
    this.props.history.push("/profile");
  };

  seeFriends = () => {
    this.setState({
      userList: !this.state.userList
    });
  };

  seeMessages = () => {
    this.props.history.push("/");
  };

  settingProfile = () => {
    this.props.history.push("/");
  };

  componentDidMount = async () => {

  }

  render() {
    return (
      <div className={style.page}>
        <div className={style.sidebar}>
          <ListItem button>
            <HomeRoundedIcon
              color="action"
              style={{ fontSize: 30, paddingRight: 5 }}
            />
            <ListItemText onClick={this.seeProfile} primary="Моя страничка" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <SupervisorAccountIcon
              color="action"
              style={{ fontSize: 30, paddingRight: 5 }}
            />
            <ListItemText onClick={this.seeFriends} primary="Друзья" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <EmailIcon
              color="action"
              style={{ fontSize: 30, paddingRight: 5 }}
            />
            <ListItemText onClick={this.seeMessages} primary="Сообщения" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <SettingsIcon
              color="action"
              style={{ fontSize: 30, paddingRight: 5 }}
            />
            <ListItemText onClick={this.settingProfile} primary="Настройки" />
          </ListItem>
        </div>
        <div className="blockPages">
        {this.state.userList ? <AdminPage /> : ""}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store: any) => {
  return {
    userProfile: store.user.user,
    allUsers: store.users.users
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUserAction: (user: any) => dispatch(getUser(user)),
    setAllUsersAction: (users: any) => dispatch(getAllUsers(users))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidebar));
