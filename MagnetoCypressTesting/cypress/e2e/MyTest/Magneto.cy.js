Cypress.LocalStorage.clear = function (keys, ls, rs) { };
import homeProduct from "../../Pages/homeProduct";
import customerDetail from "../../Pages/customerDetail";
import orderSummary from "../../Pages/orderSummary";
import addtoProduct from "../../Pages/addtoProduct";
import selectProduct from "../../Pages/selectProduct";
describe('Magneto Software Testing', () => {
      let productTestg
      let data
      let rowsLength
      before(function () {
            cy.task('readXlsx', { file: 'cypress/fixtures/MagnetoExcel.xlsx', sheet: "MagnetoData" }).then((rows) => {
                  rowsLength = rows.length;
                  cy.writeFile("cypress/fixtures/xlsxData.json", { rows })
            })
            cy.fixture('xlsxData').then((datatest) => {
                  data = datatest
            })
            cy.fixture('product').then(function (productTest) {
                  productTestg = productTest
            })
            cy.visit(Cypress.env('url'))
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
            for (let i = 0; i < rowsLength; i++) {
                  customer.enterData(data.rows[i].email, data.rows[i].firstname, data.rows[i].lastname, data.rows[i].company, data.rows[i].street_address, data.rows[i].city, data.rows[i].postal_code, data.rows[i].phone)
            }
      })
      it('Verify Order Summary data', async function () {
            const order = new orderSummary()
            cy.log(productTestg.Product_name)
            order.verifyOrder(productTestg.Product_name, productTestg.Product_quantity, productTestg.Product_price)
      })
})
