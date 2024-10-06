"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = exports.PRODUCTS_FEATURE_KEY = void 0;
exports.productsReducer = productsReducer;
const data_1 = require("@nx-example/shared/product/data");
exports.PRODUCTS_FEATURE_KEY = 'products';
exports.initialState = {
    products: data_1.products,
};
function productsReducer(state = exports.initialState, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=products.reducer.js.map