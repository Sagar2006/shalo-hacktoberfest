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
const testing_1 = require("@angular/core/testing");
const products_product_detail_page_module_1 = require("./products-product-detail-page.module");
describe('ProductsProductDetailPageModule', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testing_1.TestBed.configureTestingModule({
            imports: [products_product_detail_page_module_1.ProductsProductDetailPageModule],
        }).compileComponents();
    }));
    it('should create', () => {
        expect(products_product_detail_page_module_1.ProductsProductDetailPageModule).toBeDefined();
    });
});
//# sourceMappingURL=products-product-detail-page.module.spec.js.map