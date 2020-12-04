import kegListReducer from "../../reducers/keg-list-reducer";
import * as c from "../../actions/ActionTypes";

describe("kegListReducer", () => {
  let action;
  const kegData = {
    names: "lite",
    brand: "PBR",
    price: 2,
    id: 1,
    abv: 4,
    pints: 124,
    quantity: 1,
  };
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
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
  test("should succesfully add new keg data to masterKegList", () => {
    const { names, brand, price, id, abv, pints, quantity } = kegData;
    action = {
      type: c.ADD_OR_UPDATE_KEG,
      names: names,
      brand: brand,
      price: price,
      id: id,
      abv: abv,
      pints: pints,
      quantity: quantity,
    };
    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        names: names,
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
        names: "Highlife",
        brand: "Miller",
        price: 3,
        id: 2,
        abv: 5,
        pints: 124,
        quantity: 1,
      },
    });
  });
  //   test("Should add a formatted wait time to keg entry", () => {
  //     const { names, location, issue, timeOpen, id } = kegData;
  //     action = {
  //       type: c.UPDATE_TIME,
  //       formattedWaitTime: "4 minutes",
  //       id: id,
  //     };
  //     expect(kegListReducer({ [id]: kegData }, action)).toEqual({
  //       [id]: {
  //         names: names,
  //         location: location,
  //         issue: issue,
  //         timeOpen: timeOpen,
  //         id: id,
  //         formattedWaitTime: "4 minutes",
  //       },
  //     });
  //   });
});
