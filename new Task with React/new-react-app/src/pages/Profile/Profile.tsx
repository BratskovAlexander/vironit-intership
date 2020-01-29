import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import Louder from "../../component/Louder/Louder";
import Header from "../../component/Header/Header";
// import UserProfile from "../../component/UserProfile/UserProfile";
// import { withRouter } from "react-router-dom";
// import service from "../../service/service";
// import style from "./Profile.module.css";
// import TextField from "@material-ui/core/TextField";
// import { Button, MenuItem } from "@material-ui/core";
// import ModalPage from "../../component/ModalPage/ModalPage";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { getUser } from "../../actions/userAction";

class Profile extends React.Component<any, any> {
  // static propTypes: any;
  constructor(props: any) {
    super(props);
    this.state = {
      louder: true
      // user: { ...this.props.user, cityID: "" },
      // admin: { ...this.props.user, cityID: "" },
      // updateUserData: {},
      // city: [],
      // modalWindowUpdate: false,
      // modalWindowDelete: false
    };
  }

  // getValueInputName = (event: any) => {
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       name: event.target.value
  //     },
  //     updateUserData: {
  //       ...this.state.updateUserData,
  //       name: event.target.value
  //     }
  //   });
  // };

  // getValueInputSurname = (event: any) => {
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       surname: event.target.value
  //     },
  //     updateUserData: {
  //       ...this.state.updateUserData,
  //       surname: event.target.value
  //     }
  //   });
  // };

  // getValueInputLogin = (event: any) => {
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       login: event.target.value
  //     },
  //     updateUserData: {
  //       ...this.state.updateUserData,
  //       login: event.target.value
  //     }
  //   });
  // };

  // getValueInputPassword = (event: any) => {
  //   this.setState({
  //     updateUserData: {
  //       ...this.state.updateUserData,
  //       password: event.target.value
  //     }
  //   });
  // };

  // getValueInputCity = (event: any) => {
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       cityID: event.target.value
  //     },
  //     updateUserData: {
  //       ...this.state.updateUserData,
  //       cityID: event.target.value
  //     }
  //   });
  // };

  // updateUser = async () => {
  //   try {
  //     const updateUserData: any = await service.updateUser(
  //       this.state.user._id,
  //       {
  //         ...this.state.updateUserData
  //       }
  //     );
  //     if (updateUserData) {
  //       this.setState({
  //         modalWindowUpdate: true
  //       });
  //     }
  //   } catch (error) {
  //     this.props.history.push("/profile");
  //   }
  // };

  // deleteUser = async () => {
  //   try {
  //     const updateUserData: any = await service.deleteUser(this.state.user._id);
  //     if (updateUserData) {
  //       sessionStorage.removeItem("access-token");
  //       localStorage.removeItem("refresh-token");
  //       this.setState({
  //         modalWindowDelete: true
  //       });
  //     }
  //   } catch (error) {
  //     this.props.history.push("/profile");
  //   }
  // };

  // closeModalWindowUpdate = () => {
  //   this.setState({
  //     modalWindowUpdate: !this.state.modalWindowUpdate
  //   });
  // };

  // closeModalWindowDelete = () => {
  //   this.setState({
  //     modalWindowDelete: !this.state.modalWindowDelete
  //   });
  // };

  componentDidMount = async () => {
    console.log("profile");
    if (sessionStorage.getItem("access-token")) {
      // const changeCity = await service.getCity();
      // const getAuthorizationUser = await service.getAuthorizationUser();
      // this.props.setUserAction(getAuthorizationUser);
      // if (getAuthorizationUser.login === "admin") {
      //   this.setState({
      //     admin: { ...getAuthorizationUser },
      //     city: changeCity
      //   });
      // }
      this.setState({
        louder: false
        // user: { ...getAuthorizationUser },
        // city: changeCity
      });
    }
  };

  render() {
    return this.state.louder ? (
      <Louder />
    ) : (
      <div>
        <Header />
        <main>
          <Sidebar />
        </main>
      </div>
    );
  }
}

// const mapStateToProps = (store: any) => {
//   return {
//     userProfile: store.user.user
//   };
// };

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     setUserAction: (user: any) => dispatch(getUser(user))
//   };
// };

// Profile.propTypes = {
//   user: PropTypes.object,
//   users: PropTypes.object,
//   setUserAction: PropTypes.func
// };

export default Profile;
