import React from "react";
import "../styles/Contact.css";

const Contact = () => {
    return (
    <div class="contact-page">
    <div class="containers">
        <h2 class="cont-act">Contact Us</h2>
        <div class="rows">
            <div class="cols">
                <div class="inputs">
                    <input type="text" name=" " required="required"></input>
                    <span class="label">First Name</span>
                    <span class="text"></span>
                </div>
            </div>
            <div class="cols">
                <div class="inputs">
                    <input type="text" name=" " required="required"></input>
                    <span class="label">Last Name</span>
                    <span class="text"></span>
                </div>
            </div>
        </div>
        <div class="rows">
            <div class="cols">
                <div class="inputs">
                    <input type="text" name=" " required="required"></input>
                    <span class="label">Email</span>
                    <span class="text"></span>
                </div>
            </div>
            <div class="cols">
                <div class="inputs">
                    <input type="text" name=" " required="required"></input>
                    <span class="label">Mobile</span>
                    <span class="text"></span>
                </div>
            </div> 
        </div>
            <div class="rows">
                <div class="cols">
                    <div class="inputs textarea">
                        <textarea required="required"></textarea>
                        <span class="label"> Message Here</span>
                        <span class="text"></span>
                    </div>
                </div>
            </div>
            <div class="rows">
                <div class="cols">
                    <input type="submit" value="send"></input>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact
