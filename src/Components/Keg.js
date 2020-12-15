import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";

function Keg(props) {
  // const { keg, onEditKeg } = props;
  const firestore = useFirestore();

  function handleEditPintSell(id) {
    const propertiesToUpdate = {
      pints: props.pints - 1,
      quantity: props.pints / 124,
      id: id,
    };
    return firestore.update(
      { collection: "kegs", doc: id },
      propertiesToUpdate
    );
  }
  function handleRestockButton(id) {
    const propertiesToUpdate = {
      quantity: props.quantity + 1,
      pints: props.pints + 124,
      id: id,
    };
    return firestore.update(
      { collection: "kegs", doc: id },
      propertiesToUpdate
    );
  }
  return (
    <React.Fragment>
      <div className="card shadow">
        <div onClick={() => props.whenKegClicked(props.id)}>
          <h3>{props.name}</h3>
          <h3>{props.brand}</h3>
          <h4>Stock: {props.pints > 0 ? props.pints : "Out of Stock"}</h4>
        </div>

        <button
          className="btn btn-primary btn-lg btn-block shadow"
          onClick={() => handleEditPintSell(props.id)}
        >
          ${props.price} pint
        </button>

        <button
          className="btn btn-secondary btn-lg btn-block shadow"
          onClick={() => handleRestockButton(props.id)}
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
