import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  isFirestoreConnect,
  isLoaded,
  isEmpty,
  useFirestoreConnect,
} from "react-redux-firebase";

function KegList(props) {
  useFirestoreConnect([{ collection: "kegs" }]);
  const kegs = useSelector((state) => state.firestore.ordered.kegs);

  if (isLoaded(kegs)) {
    return (
      <React.Fragment>
        <div className="card shadow">
          <h1>Tap List</h1>
          <hr />
          {kegs.map((keg) => {
            return (
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
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    );
  }
}

KegList.propTypes = {
  // kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onClickingSell: PropTypes.func,
  onClickingRestock: PropTypes.func,
};
export default KegList;
