describe('Overall Test', () => {

    describe('Navigation', () => {
        it('should navigate to the index page', () => {
            // Start from the index page
            cy.visit('/')
        })
    });

    describe('type a amount', () => {
        it('should update the amount', () => {
            cy.get('[id=amount]').type('10');
            cy.get('[id=giveButton]').click();
            cy.get('[id=amount]').type('{backspace}{backspace}');
            cy.get('[id=amount]').type('20');
            cy.get('[id=giveButton]').click();
            cy.get('[id=amount]').type('{backspace}{backspace}');
            cy.get('[id=amount]').type('30');
            cy.get('[id=giveButton]').click();
            cy.get('[id=amount]').type('{backspace}{backspace}');
            cy.get('[id=amount]').type('7');
            cy.get('[id=giveButton]').click();
            cy.get('[id=amount]').type('{backspace}{backspace}');
            cy.get('[id=amount]').type('50');
            cy.get('[id=giveButton]').click();
            cy.get('[id=amount]').type('{backspace}{backspace}');
        })
    });

    describe('when you add amount', () => {
        it('should update the donors', () => {
            cy.get('[id=progress-bar]');
        })
    })

    describe('when you add amount', () => {
        it('should update the donors', () => {
            cy.get('[id=donors]');
        })
    })

    describe('when you add amount', () => {
        it('should update the progression bar', () => {
            cy.get('[id=progress-bar]');
        })
    })

    describe('when the amount if completed', () => {
        it('tooltip should be disabled', () => {
            cy.get('[id=amount]').type(50);
            cy.get('[id=giveButton]').click();
        })
    })

    describe('when the amount if completed', () => {
        it('progressbar should turn green', () => {
            cy.get('[id=progress-bar]');
        })
    })

    describe('when you click', () => {
        it('should trigger the modal', () => {
            cy.get('[id=modal]').click();
        })
    })

})
