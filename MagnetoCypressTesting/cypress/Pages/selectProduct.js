class selectProduct {

  magnetoProduct() {

    cy.get(':nth-child(7) > .product-item-info > .details > .name > .product-item-link').click()
    return this
    //it('does not forget to return a promise', () => {
    //  return Cypress.Promise.delay(10).then(() => {
    //  return cy.get(':nth-child(7) > .product-item-info > .details > .name > .product-item-link').click()
    //})
    //})
  }

}
export default selectProduct

