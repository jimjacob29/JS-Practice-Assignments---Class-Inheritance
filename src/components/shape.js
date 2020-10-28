// declare class

// export class using module.exports

module.exports = class Shape {
  constructor(col = "red") {
    this.color = col;
  }
  drawShape() {
    console.log("shaped drawn");
  }
  calculateArea() {
    console.log("area calculated");
  }
};
