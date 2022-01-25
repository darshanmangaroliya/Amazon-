import {
  PRODUCTDETAIL__FAIL,
  PRODUCTDETAIL__START,
  PRODUCTDETAIL__SUCESS,
  PRODUCTLIST__FAIL,
  PRODUCTLIST__START,
  PRODUCTLIST__SUCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_RESET,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_RESET,
} from "../constent/constent";

export const productreducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTLIST__START:
      return { loading: true, error: false };

    case PRODUCTLIST__SUCESS:
      return { loading: false, products: action.paylod };

    case PRODUCTLIST__FAIL:
      return { loading: false, error: action.paylod };

    default:
      return state;
  }
};

export const productdetail = (
    state = { product: {}, loading: true },
    action
  ) => {
    switch (action.type) {
      case   PRODUCTDETAIL__START:
        return { loading: true };
      case PRODUCTDETAIL__SUCESS:
        return { loading: false, product: action.payload };
      case PRODUCTDETAIL__FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_CREATE_REQUEST:
        return { loading: true };
      case PRODUCT_CREATE_SUCCESS:
        return { loading: false, success: true, product: action.payload };
      case PRODUCT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case PRODUCT_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const productUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_UPDATE_REQUEST:
        return { loading: true };
      case PRODUCT_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case PRODUCT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case PRODUCT_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };

  export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_DELETE_REQUEST:
        return { loading: true };
      case PRODUCT_DELETE_SUCCESS:
        return { loading: false, success: true };
      case PRODUCT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case PRODUCT_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };