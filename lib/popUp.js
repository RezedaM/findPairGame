class PopUp {
    constructor(element) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('NOT HTML');
        }

        this.element = element;
    }
}