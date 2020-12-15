import * as c from "./../actions/ActionTypes";
export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id,
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

// export const Selected = (id) => ({
//   this.props.firestore
//     .get({ collection: "kegs", doc: id })
//     .then((keg) => {
//       const firestoreKeg = {
//         name: keg.get("name"),
//         barnd: keg.get("brand"),
//         price: keg.get("price"),
//         abv: keg.get("abv"),
//         pints: keg.get("pints"),
//         quantity: keg.get("quantity"),
//         id: keg.id,
//       };
//       type: c.SELECTED,
//       firestoreKeg: firestoreKeg
//     });

export const notSelected = () => ({
  type: c.NOT_SELECTED,
});

// export const addKeg = (keg) => {
//   const { name, brand, price, id, abv, pints, quantity } = keg;
//   return {
//     type: c.ADD_OR_UPDATE_KEG,
//     name: name,
//     brand: brand,
//     price: price,
//     id: id,
//     abv: abv,
//     pints: pints,
//     quantity: quantity,
//   };
// };
export const editing = () => ({
  type: c.EDIT,
});
export const notEditing = () => ({
  type: c.NOT_EDITING,
});

export const sellPint = (id) => ({
  type: c.SELL_PINT,
  id: id,
});
export const restock = (id) => ({
  type: c.RESTOCK,
  id: id,
});
