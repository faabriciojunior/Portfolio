import React from "react";
import Icon from "../../img/icon.svg"

import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="left"><img className="icon" src={Icon} alt=""/><h2>Fabrício Júnior</h2></div>
      <div className="secoes">
        <div>
          <a href="#sobremim">SOBRE MIM</a>
        </div>
        <div>
          <a href="#projetos">PROJETOS</a>
        </div>
        <div>
          <a href="#contato">CONTATO</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
