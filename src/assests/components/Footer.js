import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <h3> Head Office</h3>
        India | Mumbai <br />
        Bitkraft Technologies LLP
        <br />
        WorkSquare Premises
        <br />
        2nd Floor, Mafatlal Chambers,
        <br />
        Marathon Futurex IT Park
        <br />
        NM Joshi Marg,
        <br />
        Lower Parel E,
        <br />
        Mumbai - 400013
        <br />
      </div>

      <div className="footer_middle">
        <h3>Branch Office</h3>
        United States
        <br />
        7 hunter drive,
        <br />
        Andover MA 01810
        <br />
        +1 78627 39573
        <br />
        sales@bitkraft.co.in
        <br />
      </div>

      <div className="footer_right">
        <h3>bitkraft | Copyright 2021</h3>
      </div>
    </div>
  );
}

export default Footer;
