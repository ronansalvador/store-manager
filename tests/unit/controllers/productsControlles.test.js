const sinon = require("sinon");
const { expect } = require("chai");
const ProductsService = require("../../../services/ProductsService");
const ProductsController = require("../../../controllers/ProductController");

describe("Obtem uma lista de produtos - Controller ", () => {
  const response = {};
  const request = {};
  const result = [{
      id: 1,
      name: 'examplo_name'
    },
    {
      id: 2,
      name: 'examplo_name2'
    }
  ];

  before(() => {
    request.body = {};

    response.status = sinon.stub()
      .returns(response);
    response.json = sinon.stub()
      .returns();

    sinon.stub(ProductsService, 'getAllProducts').resolves(result);
  });

  after(() => {
    ProductsService.getAllProducts.restore();
  });

  it("retorna status 200", async () => {
    await ProductsController.getAllProducts(request, response);

    expect(response.status.calledWith(200)).to.be.equal(true);
  });
});

describe('Buscar produto por ID', () => {
  const response = {};
  const request = {};

  describe('Em caso de sucesso', () => {
    const result = {
      code: 200,
      response: {
        id: '1',
        name: 'examplo_name'
      }
    };

    before(() => {
      request.body = {};
      request.params = '1';

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(productsService, 'getProduct').resolves(result);
    });

    after(() => {
      productsService.getProduct.restore();
    });

    it('deve retornar o  status 200 e um  json com "id" e "name"', async () => {
      await productsController.getProduct(request, response);

      expect(response.status.calledWith(result.code)).to.be.equal(true);
      expect(response.json.calledWith(result.response)).to.be.equal(true);
    });
  });

  describe('Em caso de falha', () => {
    const result = {
      code: 404,
      message: 'Product not found'
    };

    before(() => {
      request.body = {};
      request.params = '1';

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(productsService, 'getProduct').resolves(result);
    });

    after(() => {
      productsService.getProduct.restore();
    });

    it('verifica se retorna status 404 e a menssagem "Product not found"', async () => {
      await productsController.getProduct(request, response);

      expect(response.status.calledWith(result.code)).to.be.equal(true);
      expect(response.json.calledWith(result.response)).to.be.equal(true);
    });
  });
});