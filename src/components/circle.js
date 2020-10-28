// import using require

// declare class

// export class using module.exports
import Shape from "./circle";
export default class Circle extends Shape {
  calculateArea() {
    console.log("overwritten");
  }
}
