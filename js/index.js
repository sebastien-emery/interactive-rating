const app = {
    state: {
        noteSelected: null,
    },
    init: function() {
        console.log('à moi de jouer');
        // Je stocke le container pour le réutiliser dans toutes mes méthodes :
        app.containerElement = document.getElementById('app');
        // Je créé ma box de notation :
        app.createRatingBox();
    },

    createRatingBox: function() {
        const ratingBox = app.configureElement('section', app.containerElement, {
            className: 'rating-box',
        });

        const icon = app.configureElement('div', ratingBox, {
            className: 'rating-box-icon',
            textContent: 'STARS',
        });
        const title = app.configureElement('h2', ratingBox, {
            className: 'rating-box-title',
            textContent: 'How did we do?'
        })
        const text = app.configureElement('p', ratingBox, {
            className: 'rating-box-text',
            textContent: 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
        });
    },

    configureElement: function(element, parent, attrs) {
        // Je créé l'élément demandé :
        const elem = document.createElement(element);
        // Je le met dans le parent :
        parent.appendChild(elem);
        // Je change les attributs de mon élément avec l'objet reçu en 3ème argument.
        for (const property in attrs) {
            elem[property] = attrs[property];
        };
        return elem;
    },
};

document.addEventListener('DOMContentLoaded', app.init);