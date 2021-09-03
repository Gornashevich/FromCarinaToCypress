export class ProductListPage {

    objPOM = require('../../fixtures/objPOM.json');

    clickRandomItem() {
        cy.get(this.objPOM.listProductItems)
            .then(($elements) => {
                const randomOption = Math.floor(Math.random() * $elements.length);
                cy.wrap($elements).its(randomOption).click({force:true})

            })
    }


}


