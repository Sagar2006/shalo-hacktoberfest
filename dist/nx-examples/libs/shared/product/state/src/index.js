"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsState = void 0;
const store_1 = require("@ngrx/store");
const products_reducer_1 = require("./lib/+state/products.reducer");
__exportStar(require("./lib/+state/products.reducer"), exports);
__exportStar(require("./lib/+state/products.selectors"), exports);
exports.getProductsState = (0, store_1.createFeatureSelector)(products_reducer_1.PRODUCTS_FEATURE_KEY);
__exportStar(require("./lib/shared-product-state.module"), exports);
//# sourceMappingURL=index.js.map