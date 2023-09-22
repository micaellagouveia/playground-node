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
    products.push(this);
  }

  // o static serve para que não seja necessário instanciar a classe para chamar o método
  static fetchAll() {
    return products;
  }
}