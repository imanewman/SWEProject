class RecModal {
    constructor(rec) {
        this.rec = rec;
    }

    //TODO: function for display, hide, expand
    //TODO: functions for each button
    //TODO: functions for editing
    //TODO: function for showing owner's edit buttons if user is owner

    // displays this rec
    display() {
        //TODO: display this rec
    }

    // hides this rec
    hide() {
        //TODO: hide this rec, ie: when filtered out during search
    }

    // expands this rec and collapses others
    expand() {
        //TODO: expands rec when arrow is clicked
    }

    // removes this rec from the list
    remove() {
        this.hide();
        //TODO: remove this rec
    }

    // saves this rec to the users watchlist
    toggleSave() {
        //TODO: toggle save on and off, animate toggle
    }

    // opens up new window with location on google maps
    locate() {
        //TODO: open location on map
    }

    // reports this rec
    report() {
        //TODO: create report modal and bring it up with this (a bit more intensive), sets icon to filled
    }

    // edits this rec
    edit() {
        //TODO: allow in-place editing if the user is the owner
    }

    // deletes this rec
    delete() {
        //TODO: deletes this rec after confirming with the user
    }

    // toggles rec between published and hidden
    toggleHide() {
        //TODO: hides this rec from the public by setting it to draft. changes icon to publish
    }

    // rsvps to rec
    rsvp() {
        //TODO: rsvp to rec, also needs a new modal, will be more intensive
    }
}

export default RecModal;