import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { name, brand, price, id, abv, pints, quantity } = action;
  switch (action.type) {
    case c.SELL_PINT:
      const sellPint = { ...state };
      sellPint[id].pints--;
      if (sellPint[id].pints >= 124)
        sellPint[id].quantity = (sellPint[id].pints / 124).toFixed(2);
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
