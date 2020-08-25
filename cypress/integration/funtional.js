describe('Functional Test', () => {

    it('Figma prototype flow', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.email-input').type('theresa06@hotmail.com');
      cy.get('.email-input').trigger('keydown', { keyCode: 9, which: 9 });
      cy.get('.email-input').type('erictaylor');
      cy.get('.email-input').trigger('keydown', { keyCode: 13, which: 14 });
      cy.get('.multi-select').should('contain', 'theresa06@hotmail.com');
      cy.get('.multi-select').should('contain', 'erictaylor');
    })

    it('List should contain suggestion', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.email-input').type('ther');
      cy.get('.suggestions-list').should('contain', 'theresa06@hotmail.com');
      cy.contains('theresa06@hotmail.com').click();
      cy.contains('theresa06@hotmail.com').click();
      cy.get('.multi-select').should('not.contain', 'theresa06@hotmail.com');
    })

    it('Add invalid email', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.email-input').type('ther');
        cy.get('.multi-select').should('contain', 'ther');
        cy.get('.email-input').trigger('keydown', { keyCode: 13, which: 13 });
    })

    it('Add invalid email and remove it', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.email-input').type('ther');
      cy.get('.multi-select').should('contain', 'ther');
      cy.get('.email-input').trigger('keydown', { keyCode: 13, which: 13 });
      cy.wait(100)
      cy.get('.email-tag').click();
      cy.get('.email-input').should('not.contain', 'ther');
  })

  })