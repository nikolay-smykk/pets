describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://alidi.ru')
    cy.screenshot()
  })
})
