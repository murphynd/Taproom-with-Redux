import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from "react-redux-firebase";

function KegEditForm(props) {
  const { keg, onEditKeg } = props;
  const firestore = useFirestore();

  function handleKegEditFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg();
    const propertiesToUpdate = {
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      pints: event.target.quantity.value * 124,
      quantity: event.target.quantity.value,
      id: keg.id,
    };
    return firestore.update(
      { collection: "kegs", doc: keg.id },
      propertiesToUpdate
    );
  }
  return (
    <React.Fragment>
      <div className="card shadow">
        <h1>Edit beer</h1>
        <ReusableForm
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          pints={keg.pints}
          quantity={keg.quantity}
          id={keg.id}
          formSubmissionHandler={handleKegEditFormSubmission}
          buttonText="Edit Keg"
        />
      </div>
    </React.Fragment>
  );
}

KegEditForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func,
};

export default KegEditForm;
