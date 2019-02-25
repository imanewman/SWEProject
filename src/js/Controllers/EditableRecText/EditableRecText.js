class EditableRecText {
    constructor(
        recModal,
        selector,
        maxChars,
        setRecDataFunc,
        getRecDataFunc,
        setHref = false
    ) {
        this.recModal = recModal;
        this.selector = selector;
        this.maxChars = maxChars;
        this.setRecDataFunc = setRecDataFunc;
        this.getRecDataFunc = getRecDataFunc;
        this.setHref = setHref;

        this.regulateEdits();
    }

    regulateEdits() {
        $(this.selector)
            .keypress((e) => {
                return e.which !== 13;
            }) //removes any new lines
            .keydown((e) => {
                this.regulateCharCount(e);
            });
    }

    regulateCharCount(e) {
        if(e.which !== 8 && $(this.selector).text().length > this.maxChars) {
            e.preventDefault();
        }
    }

    save() {
        let text = $(this.selector).text();

        this.setRecDataFunc(text);
    }

    update() {
        let text = this.getRecDataFunc();

        $(this.selector).text(text);

        if (this.setHref) {
            $(this.selector).attr('href', text);
        }
    }

    editMode() {
        $(this.selector).attr('contenteditable', 'true');
    }

    // set mode back to non-editing, and show owner buttons
    displayMode() {
        $(this.selector).attr('contenteditable', 'false');

    }
}

export default EditableRecText;