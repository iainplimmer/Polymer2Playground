(function (customElements) {

    class EventElement extends Polymer.Element {
        
        static get is() { 
            return "event-element"; 
        }

        constructor() {
            super();     
            //  We can target an element by name using $ and attach the event to it
            this.$.btn.addEventListener('click', e => { this.HandleClick(e)} );
        }

        HandleClick() {
            this.message = 'Event listener event has happened, baby!';
        }

        ready() {
            super.ready();
            console.log('event-element is ready!');
            
        }

    }
    customElements.define(EventElement.is, EventElement);

})(customElements);