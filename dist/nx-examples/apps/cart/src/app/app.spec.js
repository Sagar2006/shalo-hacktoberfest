"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("@testing-library/react");
const app_1 = __importDefault(require("./app"));
describe('App', () => {
    afterEach(react_1.cleanup);
    it('should render successfully', () => {
        const { baseElement } = (0, react_1.render)(<react_router_dom_1.MemoryRouter initialEntries={['/cart']}>
        <app_1.default />
      </react_router_dom_1.MemoryRouter>);
        expect(baseElement).toBeTruthy();
    });
    it('should display the header', () => {
        expect((0, react_1.render)(<react_router_dom_1.MemoryRouter initialEntries={['/cart']}>
          <app_1.default />
        </react_router_dom_1.MemoryRouter>).baseElement.querySelector('nx-example-header')).toBeTruthy();
    });
});
//# sourceMappingURL=app.spec.js.map