import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { names, brand, price, id, abv, pints, quantity } = action;
  switch (action.type) {
    case c.ADD_OR_UPDATE_KEG:
      return Object.assign({}, state, {
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

    case c.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState;

    // case c.UPDATE_TIME:
    //   const newTicket = Object.assign({}, state[id], {
    //     formattedWaitTime,
    //   });
    //   const updatedState = Object.assign({}, state, {
    //     [id]: newTicket,
    //   });
    //   return updatedState;
    default:
      return state;
  }
};
