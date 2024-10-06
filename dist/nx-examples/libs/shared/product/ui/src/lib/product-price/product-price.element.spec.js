"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./product-price.element");
describe('ProductElement', () => {
    let productPrice;
    beforeEach(() => {
        productPrice = document.createElement('nx-example-product-price');
    });
    it('can be created', () => {
        expect(productPrice).toBeTruthy();
    });
    it('displays the price', () => __awaiter(void 0, void 0, void 0, function* () {
        productPrice.value = 12345;
        yield Promise.resolve();
        expect(productPrice.textContent).toContain('$123.45');
    }));
});
//# sourceMappingURL=product-price.element.spec.js.map