"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderElement = void 0;
var HeaderElementAttribute;
(function (HeaderElementAttribute) {
    HeaderElementAttribute["Title"] = "title";
})(HeaderElementAttribute || (HeaderElementAttribute = {}));
class HeaderElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.titleElement = document.createElement('h2');
    }
    get title() {
        return this.getAttribute(HeaderElementAttribute.Title);
    }
    set title(title) {
        this.setAttribute(HeaderElementAttribute.Title, title);
    }
    connectedCallback() {
        this.appendChild(this.createLeftSide());
        this.appendChild(this.createRightSide());
    }
    attributeChangedCallback(name) {
        switch (name) {
            case HeaderElementAttribute.Title: {
                this.titleElement.textContent = this.title;
                break;
            }
        }
    }
    createLeftSide() {
        const leftSide = document.createElement('div');
        const homeLink = document.createElement('a');
        const homeLinkText = document.createElement('h2');
        homeLink.href = '/';
        homeLinkText.textContent = 'Nx Store';
        homeLink.appendChild(homeLinkText);
        leftSide.appendChild(homeLink);
        this.titleElement.textContent = this.title;
        leftSide.appendChild(this.titleElement);
        return leftSide;
    }
    createRightSide() {
        const githubLink = document.createElement('a');
        const icon = document.createElement('span');
        githubLink.href = 'https://github.com/nrwl/nx-examples';
        icon.classList.add('icon', 'icon-github');
        githubLink.appendChild(icon);
        const rightSide = document.createElement('div');
        rightSide.appendChild(githubLink);
        return rightSide;
    }
}
exports.HeaderElement = HeaderElement;
HeaderElement.observedAttributes = [HeaderElementAttribute.Title];
customElements.define('nx-example-header', HeaderElement);
//# sourceMappingURL=header.element.js.map