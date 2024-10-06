"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemCost = getItemCost;
exports.getTotalCost = getTotalCost;
const react_1 = require("@nx-example/shared/product/state/react");
// Lookup the 'Cart' feature state managed by NgRx
function getItemCost(item, productsState) {
    return (0, react_1.getProduct)(productsState, item.productId).price * item.quantity;
}
function getTotalCost(state, productsState) {
    return state.items.reduce((total, item) => total + getItemCost(item, productsState), 0);
}
//# sourceMappingURL=cart.selectors.js.map