import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import style from "./Messages.module.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Button } from "@material-ui/core";

class Messages extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      post: {
        message: ""
      }
    };
  }

  getTextareaValue = (event: any) => {
    this.setState({
      post: {
        ...this.state.post,
        message: event.target.value
      }
    });
  };

  seeMessages = () => {
    console.log(this.state.post.message);
  };

  componentDidMount = () => {};

  render() {
    return (
      <>
        <Header />
        <main>
          <Sidebar />
          <div>
            <textarea
              onChange={this.getTextareaValue}
              value={this.state.post.message}
              placeholder="Введите ваше сообщение"
            ></textarea>
            <Button
              className={style.btn}
              onClick={this.seeMessages}
              variant="contained"
            >
              отправить
            </Button>
          </div>
        </main>
      </>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(withRouter(Messages));
