"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e2e_utils_1 = require("@nx-example/shared/e2e-utils");
const app_po_1 = require("../support/app.po");
describe('products', () => {
    before(() => cy.visit('/'));
    it('should display the header', () => {
        (0, e2e_utils_1.getHeader)().should('exist');
    });
    it('should display products', () => {
        (0, app_po_1.getPage)().get('li figure').should('have.length', 5);
    });
    it('should navigate to product details', () => {
        (0, app_po_1.getPage)().get('li a').first().click();
        cy.url().should('include', '/product/1');
    });
});
//# sourceMappingURL=app.cy.js.map