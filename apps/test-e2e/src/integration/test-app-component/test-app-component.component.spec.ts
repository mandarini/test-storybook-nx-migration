describe('test', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testappcomponentcomponent--primary'));

  it('should render the component', () => {
    cy.get('scorptest-test-app-component').should('exist');
  });
});
