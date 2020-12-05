import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div ClassName="card">
        <div onClick={() => props.whenKegClicked(props.id)}>
          <h3>{props.name}</h3>
          <h3>{props.brand}</h3>
          <h4>Stock: {props.pints > 0 ? props.pints : "Out of Stock"}</h4>
        </div>

        <button onClick={() => props.sellButton(props.id)}>
          ${props.price} pint
        </button>

        <button onClick={() => props.restockButton(props.id)}>
          Restock Keg
        </button>
      </div>
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
