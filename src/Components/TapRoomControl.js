import React from "react";
import KegList from "./kegList";
import KegCreateForm from "./kegCreateForm";
import KegDetail from "./kegDetail";
import KegEditForm from "./kegEditForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "./../actions";

class TapRoomControl extends React.Component {
  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedKeg != null) {
      const action = a.toggleEdit();
      dispatch(action);
      const action2 = a.notSelected();
      dispatch(action2);
    } else {
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  handleAddingKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  };
  handleChangingSelectedKeg = (keg) => {
    // const selectedKeg = this.state.masterKegList.filter(
    //   (keg) => keg.id === id
    // )[0];
    // this.setState({ selectedKeg: selectedKeg });
    const { dispatch } = this.props;
    const action = a.Selected(keg);
    dispatch(action);
  };

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.notSelected();
    dispatch(action2);
  };
  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEdit();
    dispatch(action);
  };

  handleEditingKegInList = (KegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(KegToEdit);
    dispatch(action);
    const action2 = a.toggleEdit();
    dispatch(action2);
    const action3 = a.notSelected();
    dispatch(action3);
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editing) {
      currentlyVisibleState = (
        <KegEditForm
          keg={this.props.selectedKeg}
          onEditKeg={this.handleEditingKegInList}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.props.selectedKeg != null) {
      currentlyVisibleState = (
        <KegDetail
          keg={this.props.selectedKeg}
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
      console.log(this.props.masterKegList);
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={this.handleClick}
        >
          {buttonText}
        </button>
      </React.Fragment>
    );
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
    selectedKeg: state.selectedKeg,
  };
};

TapRoomControl = connect(mapStateToProps)(TapRoomControl);

export default TapRoomControl;
