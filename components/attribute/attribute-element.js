(function (customElements) {

    class AttributeElement extends Polymer.Element {
        
        static get is() { 
            return "attribute-element"; 
        }

        constructor() {
            super();       
        }

        // We can configure to read in Props here. This declares a default.
        static get properties() {
            return {
                name: {
                    type: String,
                    value: "INSERT NAME HERE",
                }
            };
        }

    }

    customElements.define(AttributeElement.is, AttributeElement);

})(customElements);