import editReducer from "../../reducers/edit-reducer";
import * as c from "../../actions/ActionTypes";

describe("editReducer", () => {
  test("SHould return default state if no action type is recognized", () => {
    expect(editReducer(false, { type: null })).toEqual(false);
  });

  test("Should toggle edit state to true", () => {
    expect(editReducer(false, { type: c.TOGGLE_EDIT })).toEqual(true);
  });
});
