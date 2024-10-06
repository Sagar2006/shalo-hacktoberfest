"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPriceElement = void 0;
var ProductPriceElementAttribute;
(function (ProductPriceElementAttribute) {
    ProductPriceElementAttribute["Value"] = "value";
})(ProductPriceElementAttribute || (ProductPriceElementAttribute = {}));
class ProductPriceElement extends HTMLElement {
    get displayPrice() {
        return '$' + (this.value / 100).toFixed(2);
    }
    get value() {
        return +this.getAttribute(ProductPriceElementAttribute.Value);
    }
    set value(price) {
        this.setAttribute(ProductPriceElementAttribute.Value, price.toString());
    }
    attributeChangedCallback(name) {
        switch (name) {
            case ProductPriceElementAttribute.Value: {
                this.textContent = this.displayPrice;
                break;
            }
        }
    }
}
exports.ProductPriceElement = ProductPriceElement;
ProductPriceElement.observedAttributes = [ProductPriceElementAttribute.Value];
customElements.define('nx-example-product-price', ProductPriceElement);
//# sourceMappingURL=product-price.element.js.map