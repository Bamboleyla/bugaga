import React from "react";
import logo from "./logo/logo.svg";
import style from "./StartPage.module.css";
import Cell from "./Cell";
import { NavLink } from "react-router-dom";
import { Component } from "react";

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinamic: undefined,
      i: 0,
    };
    let change = (arr) => {
      let i = this.state.i;
      return setInterval(() => {
        let s = arr[(i = ++i == arr.length ? 0 : i)];
        this.setState({ dinamic: s });
        return s;
      }, 1000);
    };
    const arrD = ["on", "off"];
    change(arrD);
  }
  render() {
    return (
      <div className={style.grid}>
        <img src={logo} alt="bugaga"></img>
        <div className={style.radiobutton}>
          <NavLink to="/radio">RadioButton</NavLink>
          <div className={style.list}>
            <Cell class={this.state.dinamic} />
            <Cell class={this.state.dinamic} />
            <Cell class={this.state.dinamic} />
            <Cell class={this.state.dinamic} />
            <Cell class={this.state.dinamic} />
            <Cell class={this.state.dinamic} />
            <Cell class={this.state.dinamic} />
            <Cell class={this.state.dinamic} />
            <Cell class={this.state.dinamic} />
          </div>
        </div>
        <div className={style.radio}>
          <NavLink to="/button">Button</NavLink>
          <div className={style.list}>
            <Cell class={this.state.dinamic} />
            <Cell class={this.state.dinamic} />
            <Cell class={this.state.dinamic} />
            <Cell class={this.state.dinamic} />
            <Cell class={this.state.dinamic} />
            <Cell class={this.state.dinamic} />
            <Cell class={this.state.dinamic} />
            <Cell class={this.state.dinamic} />
            <Cell class={this.state.dinamic} />
          </div>
        </div>
      </div>
    );
  }
}

export default StartPage;
