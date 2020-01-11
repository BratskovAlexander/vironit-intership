import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

class Settings extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {};

  render() {
    return (
      <>
        <Header />
        <main>
          <Sidebar />
          <div>Здесь будут настройки всякие</div>
        </main>
      </>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(withRouter(Settings));
