describe("render home page", () => {
    it("render correctly", () => {
        cy.visit('/');
        cy.get(".container").should("exist")
    });

    it("allows", () => {
        cy.visit('/')
    })
}) 