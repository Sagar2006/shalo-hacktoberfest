"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartCartPage = void 0;
const react_1 = require("react");
const styled_1 = __importDefault(require("@emotion/styled"));
require("@nx-example/shared/product/ui");
const react_2 = require("@nx-example/shared/cart/state/react");
const react_3 = require("@nx-example/shared/product/state/react");
const StyledUl = styled_1.default.ul `
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 900px;
  padding: 10px;

  @media screen and (max-width: 900px) {
    max-width: 100%;
  }
`;
const StyledLi = styled_1.default.li `
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;

  figure {
    flex-shrink: 0;
    height: 125px;
    width: 125px;
    justify-content: center;
    display: flex;
    margin: 0;
  }

  select {
    width: 50px;
    margin: 0 20px;
  }

  .title {
    flex-grow: 1;
    margin-left: 50px;
  }

  @media screen and (max-width: 900px) {
    figure {
      width: 50px;
      height: 50px;
    }

    .title {
      margin-left: 1em;
    }
  }
`;
const StyledTotalLi = styled_1.default.li `
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;

  h2 {
    flex-grow: 1;
    margin-left: 175px;
  }
`;
const optionsArray = new Array(5).fill(null);
const CartCartPage = () => {
    const [productsState] = (0, react_1.useReducer)(react_3.productsReducer, react_3.initialState);
    const { products } = productsState;
    const [cartState, dispatch] = (0, react_1.useReducer)(react_2.cartReducer, {
        items: products.map((product) => ({
            productId: product.id,
            quantity: 1,
        })),
    });
    return (<StyledUl>
      {cartState.items.map((item) => (<StyledLi key={item.productId}>
          <a href={`/product/${item.productId}`}>
            <figure>
              <img src={(0, react_3.getProduct)(productsState, item.productId).image}/>
            </figure>
          </a>
          <a href={`/product/${item.productId}`} className="title">
            <h2>{(0, react_3.getProduct)(productsState, item.productId).name}</h2>
          </a>
          <p>
            <nx-example-product-price value={(0, react_3.getProduct)(productsState, item.productId).price}/>
          </p>
          <select value={item.quantity} onChange={(event) => {
                dispatch(new react_2.SetQuantity(item.productId, +event.target.value));
            }}>
            {optionsArray.map((_, i) => (<option key={i} value={i}>
                {i}
              </option>))}
          </select>
          <p>
            <nx-example-product-price value={(0, react_2.getItemCost)(item, productsState)}/>
          </p>
        </StyledLi>))}
      <StyledTotalLi>
        <h2>Total</h2>
        <p>
          <nx-example-product-price value={(0, react_2.getTotalCost)(cartState, productsState)}/>
        </p>
      </StyledTotalLi>
    </StyledUl>);
};
exports.CartCartPage = CartCartPage;
exports.default = exports.CartCartPage;
//# sourceMappingURL=cart-cart-page.js.map