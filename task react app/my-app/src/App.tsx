import React from "react";
import "./App.css";

interface IState {
    name?: string;
    surname?: string;
    cityID?: string | number;
    login?: string;
    password?: string | number;
  userProfile?: any;
  divVisible?: boolean;
}

const users: IState[] = [
  {
    name: "Alexander",
    surname: "Bratskov",
    cityID: "5dd52d934faa1725cc780eec",
    login: "Alexander",
    password: "$2a$10$vao6jP.jcnghxMtVVGVT/uJ6vc919lCcek0yMaonmYFex.3hZNM6y"
  },
  {
    name: "Valera",
    surname: "Grul",
    cityID: "5dd52d934faa1725cc780eec",
    login: "Valera",
    password: "$2a$10$vao6jP.jcnghxMtVVGVT/uJ6vc919lCcek0yMaonmYFex.3hZNM6y"
  },
  {
    name: "Viktoryia",
    surname: "Bratskova",
    cityID: "5dd52d934faa1725cc780eec",
    login: "Viktoryia",
    password: "$2a$10$vao6jP.jcnghxMtVVGVT/uJ6vc919lCcek0yMaonmYFex.3hZNM6y"
  },
  {
    name: "Evgeniy",
    surname: "Bratskov",
    cityID: "5dd52d934faa1725cc780eec",
    login: "Evgeniy",
    password: "$2a$10$vao6jP.jcnghxMtVVGVT/uJ6vc919lCcek0yMaonmYFex.3hZNM6y"
  },
  {
    name: "Dimon",
    surname: "Khotin",
    cityID: "5dd52d934faa1725cc780eec",
    login: "Dimon",
    password: "$2a$10$vao6jP.jcnghxMtVVGVT/uJ6vc919lCcek0yMaonmYFex.3hZNM6y"
  }
];

class App extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      userProfile: {},
      divVisible: false
    };
  }
  seeUser = (e: any): void => {
    this.setState({ userProfile: e });
  };
  render() {
    return (
      <div>
        {users.map((user: any, index: number) => (
          <div key={index} onClick={this.seeUser.bind(this, user)}>
            Hello, {user.name}
          </div>
        ))}
        <div>
          <input type="text" value={this.state.userProfile.name} disabled />
          <input type="text" value={this.state.userProfile.surname} disabled />
          <input type="text" value={this.state.userProfile.cityID} disabled />
          <input type="text" value={this.state.userProfile.login} disabled />
          <input type="text" value={this.state.userProfile.password} disabled />
        </div>
      </div>
    );
  }
}

export default App;
