"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetQuantity = exports.CartActionTypes = void 0;
var CartActionTypes;
(function (CartActionTypes) {
    /* eslint-disable @typescript-eslint/no-shadow */
    CartActionTypes["SetQuantity"] = "[Cart] Set Quantity";
})(CartActionTypes || (exports.CartActionTypes = CartActionTypes = {}));
class SetQuantity {
    constructor(productId, quantity) {
        this.productId = productId;
        this.quantity = quantity;
        this.type = CartActionTypes.SetQuantity;
    }
}
exports.SetQuantity = SetQuantity;
//# sourceMappingURL=cart.actions.js.map