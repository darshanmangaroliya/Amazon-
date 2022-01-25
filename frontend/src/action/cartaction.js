import { CART_ADD_HANDLE, CART_PAYMENT_METHOD_SAVE, CART_REMOVE_HANDLE, CART_SHIPPING_ADDRESS_SAVE } from "../constent/cart";
import Axios from "axios";

export const addtocarthandler =
  (productId, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({
      type: CART_ADD_HANDLE,
      paylod: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        product: data._id,
        qty,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartitems)
    );
  };

  export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_HANDLE, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartitems));
  };


  export const saveAddress = (data)=> (dispatch)=>{
    dispatch({type:CART_SHIPPING_ADDRESS_SAVE,paylod:data})
    localStorage.setItem("shippingAddress",JSON.stringify(data))
  }

  export const savePaymentMethod = (data)=>(dispatch)=>{
    dispatch({type:CART_PAYMENT_METHOD_SAVE,paylod:data})
  }