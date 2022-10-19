describe('Overall Test', () => {

    describe('Navigation', () => {
        it('should navigate to the index page', () => {
            // Start from the index page
            cy.visit('/')
        })
    });

    describe('type a amount', () => {
        it('should update the amount, it should update the donors as well', () => {
            cy.get('[id=amount]').type('10');
            cy.get('[id=giveButton]').click();
            cy.get('[id=amount]').type('{backspace}{backspace}');
        })
    });

    describe('when the amount if completed', () => {
        it('tooltip should be disabled and progress bar should turn into green', () => {
            cy.get('[id=amount]').type(157);
            cy.get('[id=giveButton]').click();
        })
    })

    describe('when you click', () => {
        it('should trigger the modal', () => {
            cy.get('[id=modal]').click();
        })
    })

})
