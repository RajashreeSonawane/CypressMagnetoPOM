class customerDetail {

  enterData(email,firstName,lastName,company,street_address,city,postal_code,phone) {
    cy.wait(10000)
    cy.get("#customer-email-fieldset > .required > .control > #customer-email").type(email),
      cy.wait(10000)
    cy.xpath("//input[@name='firstname']").type(firstName),
      cy.wait(2000)
    cy.xpath("//input[@name='lastname']").type(lastName),
      cy.wait(2000)
    cy.xpath("//input[@name='company']").type(company),
      cy.wait(2000)
    cy.xpath("//input[@name='street[0]']").type(street_address),
      cy.wait(2000)
    cy.xpath("//input[@name='city']").type(city),
      cy.wait(2000)
    cy.xpath("//input[@name='postcode']").type(postal_code),
      cy.wait(5000)
    cy.get('select[name="country_id"]').select('India').should('have.value', 'IN')
    cy.wait(15000)
    cy.get('select[name="region_id"]').select('Andhra Pradesh')
    cy.wait(10000)
    cy.xpath("//input[@name='telephone']").type(phone),
      cy.wait(2000)
    cy.xpath("//*[@id='label_carrier_flatrate_flatrate']").click({ force: true }),
      cy.wait(2000)
    cy.get(".button").click()
    
  }
}
export default customerDetail



