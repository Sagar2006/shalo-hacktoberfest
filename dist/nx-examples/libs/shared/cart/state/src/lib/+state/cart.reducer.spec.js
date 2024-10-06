"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cart_actions_1 = require("./cart.actions");
const cart_reducer_1 = require("./cart.reducer");
describe('Cart Reducer', () => {
    let cartState;
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
    });
    describe('SetQuantity ', () => {
        it('should set the quantity of the cart item', () => {
            const action = new cart_actions_1.SetQuantity('1', 3);
            const result = (0, cart_reducer_1.cartReducer)(cartState, action);
            expect(result.items[1].quantity).toEqual(3);
        });
    });
});
//# sourceMappingURL=cart.reducer.spec.js.map