import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const productOnCart = state.cartItems.find(
        (x) => x.product === item.product
      );
      if (productOnCart) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.product === productOnCart.product ? item : x
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
}

export { cartReducer };