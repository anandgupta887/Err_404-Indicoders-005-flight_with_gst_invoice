
import "../styles/Header.css";

 function Header() {
     return (
         <div>
        <div className="header">
        <div className="left_side">
          <img className = "header_logo" src="http://www.bitkraft.co.in/bk/wp-content/uploads/2014/06/TM-Bitkraft-Logo-PNG.png" alt=""/>
        </div>

      <div className="right_side">
        <ul className = "header__links">
          <li className = "header_link">
            <a href="/" className = "header_a_link">Home </a>
            <a href="/" className = "header_a_link">Book Flight</a>
            <a href="/" className = "header_a_link">Search Invoices</a>
            <a href="/" className = "header_a_link">Contact</a>
           
           
          </li>
        </ul>
      </div>
     
      </div>
         </div>
     )
 }
 
 export default Header
 