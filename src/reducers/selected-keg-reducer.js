import * as c from "./../actions/ActionTypes";

export default (state = null, action) => {
  const { selectedKeg } = action;
  switch (action.type) {
    case c.SELECTED:
      const newState = selectedKeg;
      return newState;
    case c.NOT_SELECTED:
      const newState2 = null;
      return newState2;
    default:
      return state;
  }
};
