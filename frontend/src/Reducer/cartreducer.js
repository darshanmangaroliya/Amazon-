import {
  CART_ADD_HANDLE,
  CART_EMPTY,
  CART_PAYMENT_METHOD_SAVE,
  CART_REMOVE_HANDLE,
  CART_SHIPPING_ADDRESS_SAVE,
} from "../constent/cart";

export const cartreducer = (state = { cartitems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_HANDLE:
      const items = action.paylod;
      const exiitems = state.cartitems.find((p) => p.product === items.product);

      if (exiitems) {
        return {
          ...state,
          cartitems: state.cartitems.map((p) => (p === exiitems ? items : p)),
        };
      } else {
        return {
          ...state,
          cartitems: [...state.cartitems, items],
        };
      }
    case CART_REMOVE_HANDLE:
      return {
        ...state,
        cartitems: state.cartitems.filter((x) => x.product !== action.payload),
      };
    case CART_SHIPPING_ADDRESS_SAVE:
      return {
        ...state,
        shipingAddress: action.paylod,
      };
    case CART_PAYMENT_METHOD_SAVE:
      return {
        ...state,
        paymentmethod: action.paylod,
      };
      case CART_EMPTY:
        return{
          ...state,
          cartitems:[]
        }
    default:
      return state;
  }
};
