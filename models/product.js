const path = require('path');
const fs = require('fs');
const products = [];

module.exports = class Product {
  constructor(
    title
    // id, name, price, description, image
  ) {
    this.title = title;
    // this.id = id;
    // this.name = name;
    // this.price = price;
    // this.description = description;
    // this.image = image;
  }
  save() {
    const p = path.join(path.join(__dirname, '..', 'data', 'products.json'));
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => console.log(err));
    }
    );
  }

  // o static serve para que não seja necessário instanciar a classe para chamar o método
  static fetchAll(cb) {
    const p = path.join(path.join(__dirname, '..', 'data', 'products.json'));

    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    }
    );
  }
}