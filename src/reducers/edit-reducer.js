import * as c from "./../actions/ActionTypes";

export default (state = false, action) => {
  switch (action.type) {
    case c.EDIT:
      const newState = true;
      return newState;
    case c.NOT_EDITING:
      const newState2 = false;
      return newState2;
    default:
      return state;
  }
};
