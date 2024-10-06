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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const cart_cart_page_1 = __importDefault(require("./cart-cart-page"));
describe(' CartCartPage', () => {
    afterEach(react_1.cleanup);
    it('should render successfully', () => {
        const { baseElement } = (0, react_1.render)(<cart_cart_page_1.default />);
        expect(baseElement).toBeTruthy();
    });
    it('should render products', () => {
        expect((0, react_1.render)(<cart_cart_page_1.default />).baseElement.querySelectorAll('li figure').length).toEqual(5);
    });
    it('should render a total', () => {
        expect((0, react_1.render)(<cart_cart_page_1.default />).baseElement.querySelector('li:last-of-type')
            .textContent).toContain('Total');
    });
    it('should update the item cost', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = (0, react_1.render)(<cart_cart_page_1.default />);
        const cartPage = result.baseElement;
        const select = cartPage.querySelector('li select');
        select.value = '2';
        react_1.fireEvent.change(select);
        yield Promise.resolve();
        expect(cartPage.querySelector('li p:last-of-type').textContent).toContain('200.00');
    }));
    it('should update the total cost', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = (0, react_1.render)(<cart_cart_page_1.default />);
        const cartPage = result.baseElement;
        const select = cartPage.querySelector('li select');
        select.value = '2';
        react_1.fireEvent.change(select);
        yield Promise.resolve();
        expect(cartPage.querySelector('li:last-of-type p:last-of-type').textContent).toContain('600.00');
    }));
});
//# sourceMappingURL=cart-cart-page.spec.js.map