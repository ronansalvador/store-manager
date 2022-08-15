const sinon = require("sinon");
const { expect } = require("chai");
const ProductsService = require("../../../services/ProductsService");
const ProductsModel = require("../../../models/ProductsModel");

describe("Obtem uma lista de produtos- Service", () => {
  before(() => {
    const execute = [{
        id: 1,
        name: 'examplo_name'
      },
      {
        id: 2,
        name: 'examplo_name2'
      },
    ];

    sinon.stub(ProductsModel, 'getAllProducts').resolves(execute);
  });

  after(() => {
    ProductsModel.getAllProducts.restore();
  });

  it('retorna uma lista de produtos', async () => {
    const response = await ProductsService.getAllProducts();

    expect(response).to.be.a('array');
  });

  it('retorna uma lista de produtos"id" e "name"', async () => {
    const response = await ProductsService.getAllProducts();

    expect(response[0]).to.have.a.property('id');
    expect(response[0]).to.have.a.property('name');

    expect(response[1]).to.have.a.property("id");
    expect(response[1]).to.have.a.property("name");
  });
});

 describe('obter produto por ID', () => {
   describe('Em caso de sucesso', () => {
     before(() => {
       const execute = [{
         id: 1,
         name: 'example_name'
       }];

       sinon.stub(productsModel, 'getProduct').resolves(execute);
     });

     after(() => {
       productsModel.getProduct.restore();
     });

     it('verifica se retorna um objeto com "code" e "response"', async () => {
       const response = await productsService.getProduct('1');

       expect(response).to.be.a('object');

       expect(response).to.have.a.property('code');
       expect(response).to.have.a.property('response');
     });
   });

   describe('Em caso de falha', () => {
     before(() => {
       const execute = [];

       sinon.stub(productsModel, 'getProduct').resolves(execute);
     });

     after(() => {
       productsModel.getProduct.restore();
     });

     it('verifica se reotrna um objeto com "code" e "message"', async () => {
       const response = await productsService.getProduct('2');

       expect(response).to.be.a('object');

       expect(response).to.have.a.property('code');
       expect(response).to.have.a.property('message');
     });
   });
 });