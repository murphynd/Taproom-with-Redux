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
        name: "lite",
        brand: "PBR",
        price: 2,
        id: 1,
        abv: 4,
        pints: 124,
        quantity: 1,
      })
    ).toEqual({
      type: c.ADD_OR_UPDATE_KEG,
      name: "lite",
      brand: "PBR",
      price: 2,
      id: 1,
      abv: 4,
      pints: 124,
      quantity: 1,
    });
  });
  it("edit form", () => {
    expect(actions.editing()).toEqual({
      type: c.EDIT,
    });
  });
  it("form hiden", () => {
    expect(actions.notEditing()).toEqual({
      type: c.NOT_EDITING,
    });
  });
  it("toggleForm should createTOGGLE-FORM action", () => {
    expect(actions.Selected()).toEqual({
      type: c.SELECTED,
    });
  });
  it("toggleForm should createTOGGLE-FORM action", () => {
    expect(actions.notSelected()).toEqual({
      type: c.NOT_SELECTED,
    });
  });
});
