const sinon = require("sinon");
const {
  expect
} = require("chai");
const ProductsModel = require("../../../models/ProductsModel");
const connection = require("../../../models/connection");

describe('Obtem uma lista de produtos - Model', () => {

  before(() => {
    const execute = [{
        id: 1,
        name: 'examplo_name'
      },
      {
        id: 2,
        name: 'examplo_name2'
      }
    ]

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(() => {
    connection.execute.restore();
  });

  it('retorna uma lista de produtos', async () => {
    const response = await ProductsModel.getAllProducts();

    expect(response).to.be.a('object');
  });

  it('retorna uma lista de produtos"id" e "name"', async () => {
    const response = await ProductsModel.getAllProducts();

    expect(response).to.have.a.property('id');
    expect(response).to.have.a.property('name');

  });
});

 describe('Busca apenas um produto por ID no BD', () => {

   describe('quando existe o produto com o ID informado', () => {

     before(() => {
       sinon.stub(ProductsModel, 'getProduct')
         .resolves({
           "id": 2,
           "name": "Traje de encolhimento"
         });
     });
     after(() => {
       ProductsModel.getProduct.restore();
     });

     it('retorna um objeto', async () => {
       const result = await ProductsModel.getProduct(2);
       expect(result).to.be.an('object');
     });
     it('retorna um objeto com as keys "id" e "name"', async () => {
       const result = await ProductsModel.getProduct(2);
       expect(result).to.includes.all.keys('id', 'name');
     });
   });
 });