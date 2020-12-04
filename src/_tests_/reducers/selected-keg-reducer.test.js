import selectedKegReducer from "../../reducers/selected-keg-reducer";
import * as c from "../../actions/ActionTypes";

describe("selectedKegReducer", () => {
  let action;
  const currentState = {
    1: {
      names: "lite",
      brand: "PBR",
      price: 2,
      id: 1,
      abv: 4,
      pints: 124,
      quantity: 1,
    },
    2: {
      names: "Highlife",
      brand: "Miller",
      price: 3,
      id: 2,
      abv: 5,
      pints: 124,
      quantity: 1,
    },
  };
  // let action = currentState[2];
  //const { dispatch } = this.props;
  // const keg = currentState[2];
  //const action = a.selected(keg);

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(selectedKegReducer({}, { type: c.NOT_SELECTED })).toEqual(null);
  });

  test("should succesfully select keg data from masterKegList", () => {
    action = {
      type: c.SELECTED,
      selectedKeg: currentState[2],
    };
    expect(selectedKegReducer(currentState[2], action)).toEqual({
      currentState[2]: {
        abv: 5,
        brand: "Miller",
        id: 2,
        names: "Highlife",
        pints: 124,
        price: 3,
        quantity: 1,
      },
    });
  });
});
