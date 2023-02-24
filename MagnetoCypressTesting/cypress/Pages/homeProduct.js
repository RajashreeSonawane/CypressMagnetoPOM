class homeProduct {
   chooseProduct() {
      cy.get('#ui-id-4 > :nth-child(2)').realHover();
      cy.wait(5000)
      cy.get('#ui-id-9').realHover();
      cy.wait(5000)
      cy.get('#ui-id-13').click({ force: true })
   }
}
export default homeProduct

