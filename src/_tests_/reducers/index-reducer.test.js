import rootReducer from "../../reducers/index";
import { createStore } from "redux";
import formVisibleReducer from "../../reducers/form-visible-reducer";
import kegListReducer from "../../reducers/keg-list-reducer";
import * as c from "../../actions/ActionTypes";

let store = createStore(rootReducer); //Redux function
describe("rootReducer", () => {
  test("Should return defualt state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      editor: false,
      masterKegList: {},
      formVisibleOnPage: false,
      selectedKeg: null,
    });
  });
  test("Smoke Test: Check that initial state of kegListReducer mathes root reducer", () => {
    expect(store.getState().masterKegList).toEqual(
      kegListReducer(undefined, { type: null })
    );
  });
  test("Smoke test: Check that initial state of formVisibbleREducer matches root reducer", () => {
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, { type: null })
    );
  });
  test("Smoke test: Check that ADD_OR_UPDATE_KEG action works for kegListReducer and root reducer", () => {
    const action = {
      type: c.ADD_OR_UPDATE_KEG,
      name: "lite",
      brand: "PBR",
      price: 2,
      id: 1,
      abv: 4,
      pints: 124,
      quantity: 1,
    };
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(
      kegListReducer(undefined, action)
    );
  });

  test("Smoke test: Check that TOGGLE_FORM action works for formVisibleReducer and root reducer", () => {
    const action = {
      type: c.TOGGLE_FORM,
    };
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, action)
    );
  });

  test("", () => {
    expect().toEqual();
  });
});
