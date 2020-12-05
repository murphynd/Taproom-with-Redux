import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <div className="card">
        <h1>Tap List</h1>
        <hr />
        {Object.values(props.kegList).map((keg) => (
          <Keg
            whenKegClicked={props.onKegSelection}
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            pints={keg.pints}
            quantity={keg.quantity}
            id={keg.id}
            key={keg.id}
            sellButton={props.onClickingSell}
            restockButton={props.onClickingRestock}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
};
export default KegList;
