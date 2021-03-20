import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="containers">
        <h2 className="cont-act">Contact Us</h2>
        <div className="rows">
          <div className="cols">
            <div className="inputs">
              <input type="text" name=" " required="required"></input>
              <span className="label">First Name</span>
              <span className="text"></span>
            </div>
          </div>
          <div className="cols">
            <div className="inputs">
              <input type="text" name=" " required="required"></input>
              <span className="label">Last Name</span>
              <span className="text"></span>
            </div>
          </div>
        </div>
        <div className="rows">
          <div className="cols">
            <div className="inputs">
              <input type="text" name=" " required="required"></input>
              <span className="label">Email</span>
              <span className="text"></span>
            </div>
          </div>
          <div className="cols">
            <div className="inputs">
              <input type="text" name=" " required="required"></input>
              <span className="label">Mobile</span>
              <span className="text"></span>
            </div>
          </div>
        </div>
        <div className="rows">
          <div className="cols">
            <div className="inputs textarea">
              <textarea required="required"></textarea>
              <span className="label"> Message Here</span>
              <span className="text"></span>
            </div>
          </div>
        </div>
        <div className="rows">
          <div className="cols">
            <input type="submit" value="send"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
