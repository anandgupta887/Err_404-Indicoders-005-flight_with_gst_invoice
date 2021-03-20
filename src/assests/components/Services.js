import React, { useState } from "react";
import "../styles/Services.css";
import { db } from "../Utils/Firebase";
import World from "../images/world.png";
import firebase from "firebase";
import { useHistory } from "react-router";

function Services() {
  const [name, setName] = useState("");
  const [depart, setDepart] = useState("");
  const [dest, setDest] = useState("");
  const [date, setDate] = useState("");

  let history = useHistory();

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangedepart = (e) => {
    setDepart(e.target.value);
  };

  const onChangedest = (e) => {
    setDest(e.target.value);
  };

  const onChangedate = (e) => {
    setDate(e.target.value);
  };

  const createData = (e) => {
    e.preventDefault();
    db.collection("orders").add({
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      name: name,
      source: depart,
      destination: dest,
      date: date,
    });
    history.push("/thankyou");
  };

  return (
    <div className="services">
      <h1 className="services_heading">Enter Your Details</h1>

      <div className="services_main">
        <div className="services_left">
          <form className="form_left">
            <h3 className="form__subHeading">Name :</h3>
            <input
              className="form__input"
              onChange={onChangeName}
              value={name}
              type="text"
              placeholder="Your Full Name"
              required
            />

            <h3 className="form__subHeading">Departure From :</h3>
            <input
              className="form__input"
              onChange={onChangedepart}
              value={depart}
              type="text"
              placeholder="Departure From"
              required
            />

            <h3 className="form__subHeading">Destination :</h3>
            <input
              className="form__input"
              onChange={onChangedest}
              value={dest}
              type="text"
              placeholder="Your Destination"
              required
            />

            <h3 className="form__subHeading">Date :</h3>
            <input
              className="form__input"
              onChange={onChangedate}
              value={date}
              type="date"
              placeholder="Date"
              required
            />
            <br />
            <button
              type="submit"
              className="form__btn"
              onClick={(e) => {
                createData(e);
              }}
            >
              Continue
            </button>
          </form>
        </div>

        <div className="services_right">
          <img className="services_right_img" src={World} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Services;
