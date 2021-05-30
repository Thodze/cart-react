import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Cart from "../components/Cart";
import * as Messages from './../constants/Message';
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import {actionChangeMessage, actionDeleteProductInCart, actionUpdateProductInCart} from "../actions";

class CartContainer extends Component {

    showCartItem = (cart) => {
        let {onDeleteProduct, onChangeMessage, onUpdateQuantity} = this.props;
        let result = <tr><td>{Messages.MESSAGE_CART_EMPTY}</td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProduct={onDeleteProduct}
                        onChangeMessage={onChangeMessage}
                        onUpdateQuantity={onUpdateQuantity}
                    />
                );
            })
        }
        return result;
    };

    showTotalAmount = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart}/>
        }
        return result;
    };

    render() {

        let {cart} = this.props;

        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            des: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDeleteProduct : PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired,
    onUpdateQuantity : PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

const mapDispatchToProps = (dispatch, props)=> {
    return {
        onDeleteProduct : (product) => {
            dispatch(actionDeleteProductInCart(product));
        },
        onChangeMessage : (message) => {
            dispatch(actionChangeMessage(message));
        },
        onUpdateQuantity : (product, quantity) => {
            dispatch(actionUpdateProductInCart(product, quantity));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
