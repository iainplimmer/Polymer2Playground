(function (customElements) {

    class ClickElement extends Polymer.Element {
        
        static get is() { 
            return "click-element"; 
        }

        constructor() {
            super();     
            this.message = '';  
        }

        HandleClick() {
            this.message = 'Click event has happened, baby!';
        }

        ready() {
            super.ready();
            console.log('click-element is ready');
            
        }

    }
    customElements.define(ClickElement.is, ClickElement);

})(customElements);