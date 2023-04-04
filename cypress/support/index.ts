export {}
declare global {
    namespace Cypress {
        interface Chainable {
            getBySel(selector, ...args): Chainable<JQuery<HTMLElement>>;
            getBySelLike(selector, ...args): Chainable<JQuery<HTMLElement>>;
        }
    }
}