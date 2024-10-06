"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nx-example/shared/product/data/testing");
const products_reducer_1 = require("./products.reducer");
describe('Products Reducer', () => {
    let productsState;
    beforeEach(() => {
        productsState = {
            products: testing_1.mockProducts,
        };
    });
    describe('unknown action', () => {
        it('should return the initial state', () => {
            const action = {};
            const result = (0, products_reducer_1.productsReducer)(productsState, action);
            expect(result).toBe(productsState);
        });
    });
});
//# sourceMappingURL=products.reducer.spec.js.map