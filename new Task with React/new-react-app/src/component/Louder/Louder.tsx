import React from "react";
import style from "./louder.module.css";

class Louder extends React.Component {
  render() {
    return (
      <div id={style.cubeloader}>
        <div className={style.caption}>
          <div className={`${style.cubeloader}`}>
            <div className={`${style.cube} ${style.loader1}`}></div>
            <div className={`${style.cube} ${style.loader2}`}></div>
            <div className={`${style.cube} ${style.loader3}`}></div>
            <div className={`${style.cube} ${style.loader4}`}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Louder