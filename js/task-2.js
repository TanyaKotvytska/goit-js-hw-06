class Storage {
  #items;

  constructor(params) {
    this.#items = params;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    return this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    if(this.#items.includes(itemToRemove)) {
     const index = this.#items.indexOf(itemToRemove);
    this.#items.splice(index, 1);
   }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); 

storage.addItem("Droid");
console.log(storage.getItems()); 

storage.removeItem("Prolonger");
console.log(storage.getItems()); 

storage.removeItem("Scaner");
console.log(storage.getItems());