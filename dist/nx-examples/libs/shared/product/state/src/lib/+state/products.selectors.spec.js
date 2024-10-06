"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nx-example/shared/product/data/testing");
const products_selectors_1 = require("./products.selectors");
describe('Products Selectors', () => {
    let productsState;
    beforeEach(() => {
        productsState = {
            products: testing_1.mockProducts,
        };
    });
    describe('getProducts', () => {
        it('should return products', () => {
            expect((0, products_selectors_1.getProducts)(productsState)).toEqual(testing_1.mockProducts);
        });
    });
    describe('getProduct', () => {
        it('should return a product by ID', () => {
            expect((0, products_selectors_1.getProduct)(productsState, '1')).toEqual(testing_1.mockProducts[1]);
        });
    });
});
//# sourceMappingURL=products.selectors.spec.js.map