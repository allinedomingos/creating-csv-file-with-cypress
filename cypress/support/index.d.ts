declare namespace Cypress {
    interface Chainable<Subject> {  

        createCsv(header: string): Chainable<any>;
        randomData(): Chainable<any>;
        insertLine(line: string): Chainable<any>;


    }
}
