
function afficherTexte(titre, contenu) {
    // Met à jour le titre de la section
    document.getElementById('title').innerText = titre;
    
    // Met à jour le texte de la section
    document.getElementById('text-content').innerText = contenu;
}


const images = document.querySelectorAll('.image-row img');
console.log(images);

        images.forEach(image => {
            image.addEventListener('mouseover', () => {
                images.forEach(img => {
                    if (img !== image) {
                        img.style.filter = 'grayscale(100%)' ;
                    }
                    });

                   //afficherTexte(image.getAttribute('titre'), image.getAttribute('contenu'));

                });
                image.addEventListener('mouseout',() => {
                    images.forEach(img => {
                        img.style.filter = 'none';
                    });

                    });
            });

var map = L.map('map').setView([48.8566, 2.3522], 8); // France, zoom niveau 8

// Ajouter une couche de tuiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([48.8584, 2.2945], 13).addTo(map)
.bindPopup('La Tour Eiffel')
.openPopup();

L.marker([48.8529, 2.3508], 13).addTo(map)
.bindPopup('Notre-Dame de Paris')
.openPopup();

L.marker([48.8738, 2.2950], 13).addTo(map)
.bindPopup('l\'Arc de Triomphe')
.openPopup();

L.marker([48.6361, -1.5115], 13).addTo(map)
.bindPopup('Le Mont Saint Michel')
.openPopup();

L.marker([48.8049, 2.1204], 13).addTo(map)
.bindPopup('Château de Versailles')
.openPopup();