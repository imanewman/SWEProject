"use strict";

class Displayable {
  attach() {}

  display() {
    let callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
  }

  hide() {
    let callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
  }

  remove() {
    let callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
  }

}