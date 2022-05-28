const app = {
    state: {
        notes: [1, 2, 3, 4, 5],
        noteSelected: null,
    },
    init: function() {
        // Je stocke le container pour le réutiliser dans toutes mes méthodes :
        app.containerElement = document.querySelector('.container');
        console.log(app.containerElement);

        // Je créé ma box de notation :
        app.createRatingBox();
        // et de remerciement :
        app.createThankYouBox();
    },

    createRatingBox: function() {
        const ratingBox = app.configureElement('section', app.containerElement, {
            className: 'rating-box',
        });

        const divIcon = app.configureElement('div', ratingBox, {
            className: 'rating-box-icon',
        });
        const icon = app.configureElement('img', divIcon, {
            className: 'rating-box-icon-img',
            src: 'images/icon-star.svg',
            alt: 'star',
        });
        const title = app.configureElement('h1', ratingBox, {
            className: 'rating-box-title',
            textContent: 'How did we do?'
        });
        const text = app.configureElement('p', ratingBox, {
            className: 'rating-box-text',
            textContent: 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
        });
        const rating = app.configureElement('div', ratingBox, {
            className: 'rating-box-rating',
        });
        app.state.notes.forEach(number => {
            let background; 
            if (app.state.noteSelected === number) {
                background = 'background-color: #7c8798;';
            }
            const note = app.configureElement('div', rating, {
                className: 'rating-box-rating-note',
                textContent: number,
                value: number,
                style: background,
                id: `note-${number}`,
            });
            // Je créé mes écouteurs sur chaques notes :
            note.addEventListener('click', app.handleNoteSelected);
        });
        const button = app.configureElement('button', ratingBox, {
            className: 'rating-box-button',
            type: 'submit',
            textContent: 'submit',
        })
        // Je créé l'écouteur pour soumettre ma note :
        button.addEventListener('click', app.handleSubmit);
    },

    
    createThankYouBox: function() {
        const tyBox = app.configureElement('section', app.containerElement, {
            className: 'tyBox',
        });
        tyBox.style.display = 'none';
        const logo = app.configureElement('img', tyBox, {
            className: 'tyBox-logo',
            src: 'images/illustration-thank-you.svg',
            alt: 'Image',
        })
        const rating = app.configureElement('div', tyBox, {
            className: 'tyBox-result',
        })
        const titleTY = app.configureElement('h1', tyBox, {
            className: 'tyBox-titleTY',
            textContent: 'thank you !'
        })
        const textTY = app.configureElement('p', tyBox, {
            className: 'tyBox-text',
            textContent: 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
        })
    },
    
    handleNoteSelected: function(e) {
        app.state.noteSelected = e.target.value;
        const allNote = document.querySelectorAll('.rating-box-rating-note');
        allNote.forEach(el => {
            el.style.background = '#262F39';
            el.style.color = '#959eac';
        })
        const noteBG = document.getElementById(`note-${e.target.value}`);
        noteBG.style.background = '#7c8798';
        noteBG.style.color = 'white';
    },

    handleSubmit: function(e) {
        // Si aucune note n'est sélectionné, on lance une alerte :
        if (app.state.noteSelected !== null) {
            const box = document.querySelector('.rating-box');
            box.style.display = 'none';
            const tyBoxBlock = document.querySelector('.tyBox');
            tyBoxBlock.style.display = 'flex';
            const tyBoxResult = document.querySelector('.tyBox-result');
            tyBoxResult.textContent = `You selected ${app.state.noteSelected} out of ${app.state.notes.length}`;
        }
        else {
            alert('Please, select a rating !');
        }

    },

    configureElement: function(element, parent, attrs) {
        // Je créé l'élément demandé :
        const elem = document.createElement(element);
        // Je le met dans le parent :
        parent.appendChild(elem);
        // Je change les attributs de mon élément avec l'objet reçu en 3ème argument.
        for (const property in attrs) {
            // Ca revient à faire
            // div.className = monObjet.className (donc la valeur de className) 
            elem[property] = attrs[property];
        };
        return elem;
    },

};

document.addEventListener('DOMContentLoaded', app.init);
