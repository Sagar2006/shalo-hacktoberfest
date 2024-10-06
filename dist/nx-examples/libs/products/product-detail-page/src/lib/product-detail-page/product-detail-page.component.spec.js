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
const core_1 = require("@angular/core");
const testing_1 = require("@angular/core/testing");
const router_1 = require("@angular/router");
const store_1 = require("@ngrx/store");
const rxjs_1 = require("rxjs");
const state_1 = require("@nx-example/shared/product/state");
const product_detail_page_component_1 = require("./product-detail-page.component");
class MockActivatedRoute {
    constructor() {
        this.paramMap = (0, rxjs_1.of)(new Map([['productId', '1']]));
    }
}
describe('ProductDetailPageComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testing_1.TestBed.configureTestingModule({
            imports: [store_1.StoreModule.forRoot({}), state_1.SharedProductStateModule],
            providers: [
                {
                    provide: router_1.ActivatedRoute,
                    useClass: MockActivatedRoute,
                },
            ],
            declarations: [product_detail_page_component_1.ProductDetailPageComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        fixture = testing_1.TestBed.createComponent(product_detail_page_component_1.ProductDetailPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it(`should show the product's name`, () => {
        const name = fixture.nativeElement.querySelector('h1');
        expect(name).toBeTruthy();
        expect(name.textContent).toEqual('A Game of Thrones');
    });
    it(`should show the product's price`, () => {
        const price = fixture.nativeElement.querySelector('nx-example-product-price');
        expect(price).toBeTruthy();
        expect(price.textContent).toEqual('$100.00');
    });
    it(`should show the product's image`, () => {
        const image = fixture.nativeElement.querySelector('figure img');
        expect(image).toBeTruthy();
        expect(image.getAttribute('src')).toEqual('/assets/images/a-game-of-thrones.jpg');
    });
});
//# sourceMappingURL=product-detail-page.component.spec.js.map