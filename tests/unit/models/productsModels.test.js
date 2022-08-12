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

describe('verifica a busca de um produto por "id"', () => {
  
  it("se o id existir retorna o produto")
  it('verifica se o retorno é um objeto')
})