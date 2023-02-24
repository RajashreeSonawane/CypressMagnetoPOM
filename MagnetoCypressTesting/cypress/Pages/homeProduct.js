class homeProduct {

   chooseProduct() {
      cy.get('#ui-id-4 > :nth-child(2)').realHover();
      cy.wait(5000)
      cy.get('#ui-id-9').realHover();
      cy.wait(5000)
      cy.get('#ui-id-13').click({force:true})
       /*new Cypress.Promise((resolve, reject) => {
         
               cy.get('#ui-id-4 > :nth-child(2)')
               .then(() => {
                 return  cy.realHover();
               })
               cy.get('#ui-id-9')
               .then(() => {
                 return cy.realHover();
               })
               cy.get('#ui-id-13')
               .then(() => {
                  return cy.click({ force: true });
               })
               return this
          //  })
         //reject()

      })*/
   }

}
export default homeProduct

