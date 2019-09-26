/// <reference types="cypress" />

describe('Home Page E2E Tests', () => {

    // https://offering.solutions/blog/articles/2018/05/27/start-your-end-to-end-testing-with-angular-and-cypress/

    beforeEach(function() {
        cy.visit('http://localhost:8100/home');
    });

    it('Application has the correct title!', () => {
      cy.title().should('include', 'Ionic App');
    });

    it('Div has world word', () => {
        cy.get('.ion-padding').should('contain', 'world');
    });

    it('Button has color attribute', () => {
        cy.get('ion-button').should('have.attr', 'color');
    });

    it('Button is disabled when input is empty', () => {
        cy.get('ion-button').should('have.attr', 'disabled');
    });

    it('Button is enabled when input is not empty', () => {
        cy.get('ion-button')
        .should('have.attr', 'disabled')
        .shadowGet('ion-item')
        .get('ion-input')
        .get('input')
        .type('SomeText')
        .get('ion-button')
        .should('not.have.attr', 'disabled');
    });

    it('P contains same input text', () => {
        cy.get('ion-button')
        .should('have.attr', 'disabled')
        .shadowGet('ion-item')
        .get('ion-input')
        .get('input')
        .type('SomeText')
        .get('ion-button')
        .should('not.have.attr', 'disabled')
        .get('p')
        .should('contain', 'SomeText');
    });

})