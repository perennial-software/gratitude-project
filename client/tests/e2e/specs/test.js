// https://docs.cypress.io/api/introduction/api.html

describe("Coming Soon on homepage", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Coming Soon");
  });
});

describe("Create page", () => {
  it("can creeate a new gratitude message and route to message page", () => {
    cy.visit("/create");
    cy.get("[data-cy=beneficiary-name]").type("Alice");
    cy.get("[data-cy=recipient-name]").type("Bob");
    cy.get("[data-cy=recipient-email]").type("bob@example.com");
    cy.get("[data-cy=video-link]").type("vimeo.com");

    cy.get("[data-cy=cta-button-text]")
      .eq(0)
      .type("Volunteer");
    cy.get("[data-cy=cta-link]")
      .eq(0)
      .type("https://example.com");
    cy.get("[data-cy=cta-description]")
      .eq(0)
      .type("volunteer");

    cy.get("[data-cy=submit]").click();

    cy.contains("h2", "Thank you,");
  });
});
