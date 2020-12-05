import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { name, brand, price, id, abv, pints, quantity } = action;
  switch (action.type) {
    case c.ADD_OR_UPDATE_KEG:
      return Object.assign({}, state, {
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

    case c.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState;

    case c.SELL_PINT:
      const sellPint = { ...state };
      sellPint[id].pints--;
      return sellPint;

    case c.RESTOCK:
      const reStock = { ...state };
      reStock[id].quantity++;
      reStock[id].pints += 124;
      return reStock;

    default:
      return state;
  }
};
