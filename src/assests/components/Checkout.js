import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Checkout = ({ name, depart, dest, date }) => {
  return (
    <div>
      <div className="Post" ref={ref}>
        <h1>{name}</h1>
        <h1>{depart}</h1>
        <h1>{dest}</h1>
        <h1>{date}</h1>
      </div>

      <Pdf targetRef={ref} filename="invoice.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Download as PDF</button>}
      </Pdf>
    </div>
  );
};

export default Checkout;
