import { makeAutoObservable } from "mobx";

class Countt {
  count = 1;
  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count = this.count + 1;
    console.log(this.increment)
  }

  dicrement() {
    this.count = this.count - 1;
    console.log(this.dicrement)
  }
}

export default new Countt();
