import "../styles/Header.css";
import SearchModal from "./SearchModal";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Header({ home }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = <div className={classes.paper}></div>;

  return (
    <div>
      <div className="header">
        <div className="left_side">
          <Link to="/">
            <img
              className="header_logo"
              src="http://www.bitkraft.co.in/bk/wp-content/uploads/2014/06/TM-Bitkraft-Logo-PNG.png"
              alt=""
            />
          </Link>
        </div>

        <div className="right_side">
          <ul className="header__links">
            <li className="header_link">
              <a href="/" className="header_a_link">
                Home{" "}
              </a>
              <a href={home ? `#book` : `/#book`} className="header_a_link">
                Book Flight
              </a>
              <a onClick={handleOpen} className="header_a_link">
                Search Invoices
              </a>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <SearchModal style={classes.paper} />
              </Modal>
              <a href="/contact-us" className="header_a_link">
                Contact
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Header;
