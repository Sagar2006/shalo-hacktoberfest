"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getProducts = void 0;
const getProducts = ({ products }) => products;
exports.getProducts = getProducts;
const getProduct = ({ products }, productId) => products.find((product) => product.id === productId);
exports.getProduct = getProduct;
//# sourceMappingURL=products.selectors.js.map