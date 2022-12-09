// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import * as path from '../fixtures/path.json';

Cypress.Commands.add('createCsv', (header) => {
  cy.writeFile(path.file, header, 'latin1');
})

Cypress.Commands.add('insertLine', (data) => {
    cy.writeFile(path.file, data, 'latin1', { flag: 'a+' });
  });
  