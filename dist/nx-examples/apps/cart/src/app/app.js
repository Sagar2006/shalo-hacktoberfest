"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_router_dom_1 = require("react-router-dom");
require("@nx-example/shared/header");
const cart_page_1 = require("@nx-example/cart/cart-page");
const App = () => {
    return (<>
      <nx-example-header />
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/cart" element={<cart_page_1.CartCartPage />}/>
      </react_router_dom_1.Routes>
    </>);
};
exports.App = App;
exports.default = exports.App;
//# sourceMappingURL=app.js.map