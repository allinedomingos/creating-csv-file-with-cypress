
import {randomData} from '../support/dynamicData';

describe('Creating csv file', () => {
    beforeEach(() => {
        cy.visit('www.google.com');
    });
    
    it('Creating csv with header in first line', () => {
       const header = 'Code;Name;Description;Material;Price\n';
       cy.createCsv(header);
    });

    it('Insert second line', () => {
        var line = `${randomData().code};` + 
        `${randomData().name};` +
        `${randomData().description};` +
        `${randomData().material};` +
        `${randomData().price}\n`

        cy.insertLine(line);
    
    });

    it('Insert last line', () => {
        var line = `${randomData().code};` + 
        `${randomData().name};` +
        `${randomData().description};` +
        `${randomData().material};` +
        `${randomData().price}\n`

        cy.insertLine(line);
    
    });

})
