class selectProduct {
  magnetoProduct() {
    cy.get(':nth-child(7) > .product-item-info > .details > .name > .product-item-link').click()
  }
}
export default selectProduct

