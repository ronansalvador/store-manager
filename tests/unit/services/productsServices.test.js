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
       const result = await ProductsService.getProduct(2);
       expect(result).to.be.an('object');
     });
     it('retorna um objeto com as keys "id" e "name"', async () => {
       const result = await ProductsService.getProduct(2);
       expect(result).to.includes.all.keys('id', 'name');
     });
   });

   describe('quando não existe produtos no BD com o ID informado', () => {

     before(() => {
       sinon.stub(ProductsModel, 'getProduct').resolves(true)
     });
     after(() => {
       ProductsModel.getProduct.restore();
     });

     it('retorna false', async () => {
       const result = await ProductsService.getProduct();
       expect(!result).to.be.equal(false);
     });
   });
 });

 describe('Criando um produto', () => {
   describe('Em caso de sucesso', () => {
     before(() => {
       const execute = [{
         insertId: 1
       }];

       sinon.stub(ProductsModel, 'createProduct').resolves(execute);
     });

     after(() => {
       ProductsModel.createProduct.restore();
     });

     it('verifica se retorna "code" e "response"', async () => {
       const response = await ProductsService.createProduct('1');

       expect(response).to.be.a('object');

       expect(response).to.have.a.property('code');
       expect(response).to.have.a.property('response');
     });
   });
 });

