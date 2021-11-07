import React from "react";
import style from "./Cell.module.css";

const Cell = (props) => {
  //Динамически меняющийся класс стиля для компонента
  let dinamycClass = props.class === "on" ? style.on : style.off;
  return (
    <div className={style.cell}>
      <div className={style.togle}>
        <i className={dinamycClass}></i>
      </div>
    </div>
  );
};

export default Cell;
