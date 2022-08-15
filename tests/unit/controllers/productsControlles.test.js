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

describe('quando exitem produtos no BD', () => {
  const response = {};
  const request = {};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(ProductsService, 'getAllProducts').resolves([{
      id: 1,
      name: 'Martelo de Thor'
    }]);
  });
  after(() => {
    ProductsService.getAllProducts.restore();
  });

  it('o status seja 200', async () => {
    await ProductsController.getAllProducts(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
  });
  it('o array esteja com os produtos', async () => {
    await ProductsController.getAllProducts(request, response);
    expect(response.json.calledWith([{
      id: 1,
      name: 'Martelo de Thor'
    }])).to.be.equal(true);
  });
});