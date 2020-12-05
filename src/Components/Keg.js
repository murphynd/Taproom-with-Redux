import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div ClassName="card shadow">
        <div onClick={() => props.whenKegClicked(props.id)}>
          <h3>{props.name}</h3>
          <h3>{props.brand}</h3>
          <h4>Stock: {props.pints > 0 ? props.pints : "Out of Stock"}</h4>
        </div>

        <button
          className="btn btn-primary btn-lg btn-block"
          onClick={() => props.sellButton(props.id)}
        >
          ${props.price} pint
        </button>

        <button
          className="btn btn-secondary btn-lg btn-block"
          onClick={() => props.restockButton(props.id)}
        >
          Restock Keg
        </button>
      </div>
      <hr></hr>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.number,
  whenKegClicked: PropTypes.func,
  restockButton: PropTypes.func,
  sellButton: PropTypes.func,
};

export default Keg;
