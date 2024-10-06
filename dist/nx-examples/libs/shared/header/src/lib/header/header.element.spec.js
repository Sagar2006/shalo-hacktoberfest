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
require("./header.element");
describe('HeaderElement', () => {
    let headerElement;
    beforeEach(() => {
        headerElement = document.createElement('nx-example-header');
        headerElement.connectedCallback();
    });
    it('can be created', () => {
        expect(headerElement).toBeTruthy();
    });
    it('should display the application title', () => {
        expect(headerElement.textContent).toContain('Nx Store');
    });
    it('should display the given heading', () => __awaiter(void 0, void 0, void 0, function* () {
        headerElement.title = 'Test Title';
        yield Promise.resolve();
        expect(headerElement.textContent).toContain('Test Title');
    }));
});
//# sourceMappingURL=header.element.spec.js.map