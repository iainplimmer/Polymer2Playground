(function (customElements) {

    class HeaderElement extends Polymer.Element {
        
        static get is() { 
            return "header-element"; 
        }

        constructor() {
            super();
            this.Title = "Creating some custom elements with Polymer 2.0";
        }
    }
    customElements.define(HeaderElement.is, HeaderElement);

})(customElements);