// import using require

// declare class

// export class using module.exports
let Shape = require("./shape.js");
module.exports = class Circle extends Shape {
  calculateArea() {
    console.log("overwritten");
  }
};
