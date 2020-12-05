import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const { keg } = props;
  return (
    <React.Fragment>
      <div className="card shadow">
        <form onSubmit={props.formSubmissionHandler}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Keg Name" />
          </div>
          <div className="form-group">
            <input type="text" name="brand" placeholder="Brand Name" />
          </div>
          <div className="form-group">
            <input type="text" name="price" placeholder="Price per pint" />
          </div>
          <div className="form-group">
            <input type="text" name="abv" placeholder="abv" />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="quantity"
              placeholder="quantity"
              defaultValue="0"
              min="0"
            />
          </div>
          <button className="btn btn-primary shadow" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
