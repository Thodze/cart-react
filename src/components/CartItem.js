import React, {Component} from 'react';
import * as Message from "../constants/Message";

class CartItem extends Component {

    showSubTotal = (quantity, price) => {
        return quantity * price;
    };

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            let {onUpdateQuantity, onChangeMessage} = this.props;
            onUpdateQuantity(product, quantity);
            onChangeMessage(Message.MESSAGE_UPDATE_CART_SUCCESS);
            setTimeout(() => {
                onChangeMessage(Message.MESSAGE_WELCOME);
            }, 5000);
        }
    };

    onDeleteProduct = (product) => {
        let {onDeleteProduct, onChangeMessage} = this.props;
        onDeleteProduct(product);
        onChangeMessage(Message.MESSAGE_DELETE_PRODUCT_IN_CART_SUCCESS);
        setTimeout(() => {
            onChangeMessage(Message.MESSAGE_WELCOME);
        }, 5000);
    };

    render() {
        let {item} = this.props;
        return (
            <tr>
                <th scope="row">
                    <img
                        src={item.product.image}
                        alt={item.product.name} className="img-fluid z-depth-0"/>
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                        >
                            <a>—</a>
                        </label>
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.quantity, item.product.price)}$</td>
                <td>
                    <button type="button"
                            className="btn btn-sm btn-primary waves-effect waves-light"
                            data-toggle="tooltip" data-placement="top"
                            title="" data-original-title="Remove item"
                            onClick={ () => this.onDeleteProduct(item.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;
