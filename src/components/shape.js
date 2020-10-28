// declare class

// export class using module.exports

export default class Shape {
  constructor(col = "red") {
    this.color = col;
  }
  drawShape() {
    console.log("shaped drawn");
  }
  calculateArea() {
    console.log("area calculated");
  }
}
