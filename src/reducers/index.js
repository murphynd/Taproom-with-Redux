import formVisibleReducer from "./form-visible-reducer";
import kegListReducer from "./keg-list-reducer";
import { combineReducers } from "redux";
import editReducer from "./edit-reducer";
// import selectedKegReducer from "./selected-keg-reducer";
import { firestoreReducer } from "redux-firestore";

//The final import statement is the combineReducers() function from Redux.
const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListReducer,
  editor: editReducer,
  // selectedKeg: selectedKegReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
