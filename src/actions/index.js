import * as Types from './../constants/ActionTypes';

export const actionAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
};

export const actionDeleteProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
};

export const actionChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
};

export const actionUpdateProductInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
};