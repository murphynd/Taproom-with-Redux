import React from "react";
import KegList from "./KegList";
import KegCreateForm from "./KegCreateForm";
import KegDetail from "./KegDetail";
import KegEditForm from "./KegEditForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "./../actions";
import { withFirestore, isLoaded } from "react-redux-firebase";

class TapRoomControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
    };
  }
  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedKeg != null) {
      const action = a.notEditing();
      dispatch(action);
      this.setState({
        selectedKeg: null,
      });
    } else {
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  handleAddingKegToList = (newKeg) => {
    const { dispatch } = this.props;
    // const action = a.addKeg(newKeg);
    // dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  };

  handleChangingSelectedKeg = (id) => {
    this.props.firestore.get({ collection: "kegs", doc: id }).then((keg) => {
      const firestoreKeg = {
        name: keg.get("name"),
        barnd: keg.get("brand"),
        price: keg.get("price"),
        abv: keg.get("abv"),
        pints: keg.get("pints"),
        quantity: keg.get("quantity"),
        id: keg.id,
      };
      this.setState({ selectedKeg: firestoreKeg });
    });
  };

  handleDeletingKeg = (id) => {
    this.props.firestore.delete({ collection: "kegs", doc: id });
    this.setState({ selectedKeg: null });
  };
  handleEditingKegInList = () => {
    const { dispatch } = this.props;
    const action = a.notEditing();
    dispatch(action);
    this.setState({
      selectedKeg: null,
    });
  };
  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.editing();
    dispatch(action);
  };
  render() {
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser == null) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the queue.</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser != null) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.props.editing) {
        currentlyVisibleState = (
          <KegEditForm
            keg={this.state.selectedKeg}
            onEditKeg={this.handleEditingKegInList}
          />
        );
        buttonText = "Return to Keg List";
      } else if (this.state.selectedKeg != null) {
        currentlyVisibleState = (
          <KegDetail
            keg={this.state.selectedKeg}
            onClickingDelete={this.handleDeletingKeg}
            onClickingEdit={this.handleEditClick}
          />
        );
        buttonText = "Return to Keg List";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = (
          <KegCreateForm onKegCreateCreation={this.handleAddingKegToList} />
        );
        buttonText = "Return to Keg List";
      } else {
        currentlyVisibleState = (
          <KegList
            kegList={this.props.masterKegList}
            onKegSelection={this.handleChangingSelectedKeg}
          />
        );
        buttonText = "Add keg";
        console.log(this.handleChangingSelectedKeg);
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <br></br>
          <br></br>
          <button
            type="button"
            className="btn btn-success btn-lg btn-block shadow "
            onClick={this.handleClick}
          >
            {buttonText}
          </button>
        </React.Fragment>
      );
    }
  }
}

TapRoomControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool,
  selectedKeg: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editor,
  };
};

TapRoomControl = connect(mapStateToProps)(TapRoomControl);

export default withFirestore(TapRoomControl);
