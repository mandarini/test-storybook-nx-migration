describe('ui-test', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testlibcomponentcomponent--primary'));

  it('should render the component', () => {
    cy.get('scorptest-test-lib-component').should('exist');
  });
});
