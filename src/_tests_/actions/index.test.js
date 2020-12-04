import * as actions from "../../actions";
import * as c from "../../actions/ActionTypes";

describe("help quere actions", () => {
  it("deleteKeg Should create DELETE_KEG action", () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1,
    });
  });
  it("toggleForm should createTOGGLE-FORM action", () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM,
    });
  });
  it("addKeg should create ADD_KEG action", () => {
    expect(
      actions.addKeg({
        names: "lite",
        brand: "PBR",
        price: 2,
        id: 1,
        abv: 4,
        pints: 124,
        quantity: 1,
      })
    ).toEqual({
      type: c.ADD_OR_UPDATE_KEG,
      names: "lite",
      brand: "PBR",
      price: 2,
      id: 1,
      abv: 4,
      pints: 124,
      quantity: 1,
    });
  });
});
