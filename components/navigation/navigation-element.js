(function (customElements) {

    class NavigationElement extends Polymer.Element {
        
        static get is() { 
            return "navigation-element"; 
        }

        constructor() {
            super();
        }
    }
    customElements.define(NavigationElement.is, NavigationElement);

})(customElements);