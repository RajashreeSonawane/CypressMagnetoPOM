Cypress.LocalStorage.clear = function (keys, ls, rs) { };
import homeProduct from "../../Pages/homeProduct";
import customerDetail from "../../Pages/customerDetail";
import orderSummary from "../../Pages/orderSummary";
import addtoProduct from "../../Pages/addtoProduct";
import selectProduct from "../../Pages/selectProduct";
describe('Magneto Software Testing', () => {
      let testdatag;
      let productTestg
      before(function () {
            cy.visit(Cypress.env('url'))
            cy.fixture('test_data').then(function (testdata) {
                  testdatag = testdata
            })
            cy.fixture('product').then(function (productTest) {
                  productTestg = productTest
            })
      })
      it('Choose Product for Magneto', function () {
            const home = new homeProduct();
            home.chooseProduct()
      })
      it('Select Product ', function () {
            const product = new selectProduct()
            product.magnetoProduct()
      })
      it('Click on Add to cart button and filling data', function () {
            const addproduct = new addtoProduct()
            addproduct.addtoCart()
            const customer = new customerDetail()
            cy.log(testdatag.email)
            customer.enterData(testdatag.email, testdatag.firstName, testdatag.lastName, testdatag.company, testdatag.street_address, testdatag.city, testdatag.postal_code, testdatag.phone)
      })
      it('Verify Order Summary data', async function () {
            const order = new orderSummary()
            cy.log(productTestg.Product_name)
            order.verifyOrder(productTestg.Product_name, productTestg.Product_quantity, productTestg.Product_price)
      })
})
