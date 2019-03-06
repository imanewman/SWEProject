class Observable{
    constructor() {
        this.observers = [];
    }

    attachObserver(o) {
        this.observers.push(o);
    }

    detachObserver(o) {
        this.observers.remove(o);

    }

    notifyObservers() {
        for (let idx = 0; idx < this.observers.length; idx++) {
            this.observers[idx].notifyOfUpdate();
        }
    }
}

export default Observable;