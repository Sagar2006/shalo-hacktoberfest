"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_utils_1 = require("@nx-example/shared/e2e-utils");
const app_po_1 = require("../support/app.po");
describe('cart', () => {
    before(() => cy.visit('/cart'));
    it('should display the header', () => {
        (0, e2e_utils_1.getHeader)().should('exist');
    });
    it('should display products', () => {
        (0, app_po_1.getPage)().get('li figure').should('have.length', 5);
    });
    it('should have the total price', () => {
        (0, app_po_1.getPage)()
            .get('li:last-of-type nx-example-product-price')
            .contains('$500.00');
    });
    it('should update total price', () => {
        (0, app_po_1.getPage)().get('li select').first().select('3');
        (0, app_po_1.getPage)()
            .get('li:last-of-type nx-example-product-price')
            .contains('$700.00');
    });
});
//# sourceMappingURL=app.cy.js.map