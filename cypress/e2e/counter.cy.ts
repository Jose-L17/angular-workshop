import { FlickrSearch } from '../pages/flickr-search.page';

describe('Counter', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct title', () => {
    cy.title().should('equal', 'Angular Workshop: Counters');
  });

  it('increments the count', () => {
    cy.get('[data-testid="count"]').first().should('have.text', '5');
    cy.get('[data-testid="increment-button"]').first().click();
    cy.get('[data-testid="count"]').first().should('have.text', '6');
  });

  it('decrements the count', () => {
    cy.get('[data-testid="decrement-button"]').first().click();
    cy.get('[data-testid="count"]').first().should('have.text', '4');
  });

  it('resets the count', () => {
    cy.get('[data-testid="reset-input"]').first().type('123');
    cy.get('[data-testid="reset-button"]').first().click();
    cy.get('[data-testid="count"]').first().should('have.text', '123');
  });
});

describe('Flickr search', () => {
  const searchTerm = 'flower';

  beforeEach(() => {
    cy.visit('/');
  });

  it('searches for a term', () => {
    cy.byTestId('reset-input')
      .first()
      .clear()
      .type(searchTerm);
    cy.byTestId('reset-button').first().click();

    //cy.byTestId('photo-item-link')
    //  .should('have.length', 15)
    //  .each((link) => {
    //    expect(link.attr('href')).to.contain(
    //      'https://www.flickr.com/photos/'
    //    );
    //  });
    //cy.byTestId('photo-item-image').should('have.length', 15);
  });

  it('shows the full photo', () => {
    cy.byTestId('reset-input').first().clear().type(searchTerm);
    cy.byTestId('reset-button').first().click();

    //cy.byTestId('photo-item-link').first().click();
    //cy.byTestId('full-photo').should('contain', searchTerm);
    //cy.byTestId('full-photo-title').should('not.have.text', '');
    //cy.byTestId('full-photo-tags').should('not.have.text', '');
    //cy.byTestId('full-photo-image').should('exist');
  });
});


describe('Flickr search (with page object)', () => {
  const searchTerm = 'flower';

  let page: FlickrSearch;

  beforeEach(() => {
    page = new FlickrSearch();
    page.visit();
  });

  //it('searches for a term', () => {
  //  page.searchFor(searchTerm);
  //  page
  //    .photoItemLinks()
  //    .should('have.length', 15)
  //    .each((link) => {
  //      expect(link.attr('href')).to.contain(
  //        'https://www.flickr.com/photos/'
  //      );
  //    });
  //  page.photoItemImages().should('have.length', 15);
  //});

  it('shows the full photo', () => {
    //page.searchFor(searchTerm);
    //page.photoItemLinks().first().click();
    //page.fullPhoto().should('contain', searchTerm);
    //page.fullPhotoTitle().should('not.have.text', '');
    //page.fullPhotoTags().should('not.have.text', '');
    //page.fullPhotoImage().should('exist');
  });
});

function findEl(testId: string): Cypress.Chainable<JQuery<HTMLElement>> {
  return cy.get(`[data-testid="${testId}"]`);
}
