import React from "react";
// import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from "react-redux-firebase";

function KegCreateForm(props) {
  const firestore = useFirestore();
  function addKegToFirestore(event) {
    event.preventDefault();
    props.onKegCreateCreation();
    return firestore.collection("kegs").add({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      pints: event.target.quantity.value * 124,
      quantity: event.target.quantity.value,
      // id: v4(),
    });
  }

  return (
    <React.Fragment>
      <div className="card shadow">
        <h1>New Keg Form</h1>
        <ReusableForm
          formSubmissionHandler={addKegToFirestore}
          buttonText="Add Keg"
        />
      </div>
    </React.Fragment>
  );
}

KegCreateForm.propTypes = {
  onKegCreateCreation: PropTypes.func,
};
//creatform
export default KegCreateForm;
