class PrivateObjectFactory {
    contructor() {
        if(! PrivateObjectFactory.instance){
            PrivateObjectFactory.instance = this;
        }

        return PrivateObjectFactory.instance;
    }

    initializeRec(recData) {}

    initializeUser(userData) {}
}

// Set up object as a Singleton

const ObjectFactory = new ObjectFactory();

Object.freeze(ObjectFactory);

export default ObjectFactory;





// I think this is the best way to create a singleton?
// https://www.sitepoint.com/javascript-design-patterns-singleton/
// other way: https://www.dofactory.com/javascript/singleton-design-pattern