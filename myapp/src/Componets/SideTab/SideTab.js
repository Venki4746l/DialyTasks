import React from "react";
import "./SideTab.css";




import { BsSpeedometer } from "react-icons/bs";
import {AiOutlineQuestionCircle} from 'react-icons/ai'
const SideTab = () => {
  return (
    <aside className="sideTabSection">
      <div className="LogoSection">
        <div className="logocontent">
          <img src="" alt="logo" />
          <h1 className="heading">FILMY PRO</h1>
        </div>
        <hr />
      </div>
      <div className="ContentSection">
        <button className="buttonSection">
          <BsSpeedometer  className="icon"/>
          
          
          Productions
        </button>
      </div>
      <button className="AboutPage">
        <AiOutlineQuestionCircle className="icon" />
          About us

      </button>
      
        
          

        
      
    </aside>
  );
};

export default SideTab;
