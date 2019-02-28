import Categories from '../Categories.js';
import Checkbox from './Checkbox.js';

class CheckboxFactory {
    static createAllCheckboxes() {
        let checkboxes = {};

        for (let idx = 0; idx < Categories.names.length; idx++) {
            let name = Categories.names[idx];

            checkboxes[name] = new Checkbox(name);
        }

        return checkboxes;
    }
}

export default CheckboxFactory;

