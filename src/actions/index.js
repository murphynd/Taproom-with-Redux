import * as c from "./../actions/ActionTypes";
export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id,
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});
export const Selected = (keg) => ({
  type: c.SELECTED,
  selectedKeg: keg,
});
export const notSelected = () => ({
  type: c.NOT_SELECTED,
});

export const addKeg = (keg) => {
  const { name, brand, price, id, abv, pints, quantity } = keg;
  return {
    type: c.ADD_OR_UPDATE_KEG,
    name: name,
    brand: brand,
    price: price,
    id: id,
    abv: abv,
    pints: pints,
    quantity: quantity,
  };
};
export const toggleEdit = () => ({
  type: c.TOGGLE_EDIT,
});
