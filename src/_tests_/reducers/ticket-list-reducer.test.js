import kegListReducer from "../../reducers/keg-list-reducer";
import * as c from "../../actions/ActionTypes";

describe("kegListReducer", () => {
  let action;
  const kegData = {
    name: "lite",
    brand: "PBR",
    price: 2,
    id: 1,
    abv: 4,
    pints: 124,
    quantity: 1,
  };
  const currentState = {
    1: {
      name: "lite",
      brand: "PBR",
      price: 2,
      id: 1,
      abv: 4,
      pints: 124,
      quantity: 1,
    },
    2: {
      name: "Highlife",
      brand: "Miller",
      price: 3,
      id: 2,
      abv: 5,
      pints: 124,
      quantity: 1,
    },
  };
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
  test("should succesfully add new keg data to masterKegList", () => {
    const { name, brand, price, id, abv, pints, quantity } = kegData;
    action = {
      type: c.ADD_OR_UPDATE_KEG,
      name: name,
      brand: brand,
      price: price,
      id: id,
      abv: abv,
      pints: pints,
      quantity: quantity,
    };
    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        id: id,
        abv: abv,
        pints: pints,
        quantity: quantity,
      },
    });
  });
  test("should successfully delete a keg", () => {
    action = {
      type: c.DELETE_KEG,
      id: 1,
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: "Highlife",
        brand: "Miller",
        price: 3,
        id: 2,
        abv: 5,
        pints: 124,
        quantity: 1,
      },
    });
  });
});
