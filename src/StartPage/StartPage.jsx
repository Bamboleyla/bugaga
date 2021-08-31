import React, { useEffect } from "react";
import logo from "./logo/logo.svg";
import style from "./StartPage.module.css";
import Cell from "./Cell";
import { NavLink } from "react-router-dom";

export const change = (arr) => {
  let i = -1;
  return setInterval(() => {
    document.querySelector("i").className =
      arr[(i = ++i == arr.length ? 0 : i)];
  }, 1000);
};

const StartPage = () => {
  const arrD = [style.indicator, style.indicatorleft];
  useEffect(() => {
    const timerID = change(arrD);
    return () => clearInterval(timerID);
  }, []);

  return (
    <div className={style.grid}>
      <img src={logo} alt="bugaga"></img>

      <div className={style.radiobutton}>
        <NavLink to="/radio">RadioButton</NavLink>
        <div className={style.list}>
          <div className={style.cell}>
            <div className={style.togle}>
              <i className={style.indicatorleft}></i>
            </div>
          </div>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
      <div className={style.radio}>
        <NavLink to="/button">Button</NavLink>
        <div className={style.list}>
          <div className={style.cell}>
            <div className={style.wrap}>
              <button className={style.buttonOn}>
                <span className={style.spanOn}>ON</span>
              </button>
            </div>
          </div>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    </div>
  );
};

export default StartPage;
