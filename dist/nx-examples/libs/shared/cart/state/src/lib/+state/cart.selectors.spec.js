"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nx-example/shared/product/data/testing");
const cart_selectors_1 = require("./cart.selectors");
describe('Cart Selectors', () => {
    let cartState;
    let productsState;
    beforeEach(() => {
        cartState = {
            items: [
                {
                    productId: '0',
                    quantity: 0,
                },
                {
                    productId: '1',
                    quantity: 1,
                },
            ],
        };
        productsState = {
            products: testing_1.mockProducts,
        };
    });
    describe('getItemCost', () => {
        it('should return the price multiplied by the quantity of the item', () => {
            expect((0, cart_selectors_1.getItemCost)({
                productId: '1',
                quantity: 2,
            }, productsState)).toEqual(40);
        });
    });
    describe('getTotalCost', () => {
        it('should return a total of all items in the cart', () => {
            expect((0, cart_selectors_1.getTotalCost)(cartState, productsState)).toEqual(20);
        });
    });
});
//# sourceMappingURL=cart.selectors.spec.js.map