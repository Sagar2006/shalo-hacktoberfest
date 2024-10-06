"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartReducer = exports.initialState = exports.CART_FEATURE_KEY = void 0;
const cart_actions_1 = require("./cart.actions");
exports.CART_FEATURE_KEY = 'cart';
exports.initialState = {
    items: [],
};
const cartReducer = (state, action) => {
    switch (action.type) {
        case cart_actions_1.CartActionTypes.SetQuantity: {
            return Object.assign(Object.assign({}, state), { items: state.items.map((item) => {
                    if (item.productId !== action.productId) {
                        return item;
                    }
                    return Object.assign(Object.assign({}, item), { quantity: action.quantity });
                }) });
        }
        default: {
            return state;
        }
    }
};
exports.cartReducer = cartReducer;
//# sourceMappingURL=cart.reducer.js.map