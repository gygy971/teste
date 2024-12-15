// Liste des produits
const produits = [
    {
        titre: "Smartphone",
        description: "Un smartphone performant avec un écran haute résolution.",
        prix: "499€",
        image: "images/smartphone.jpg"
    },
    {
        titre: "Laptop",
        description: "Un ordinateur portable idéal pour le travail et le divertissement.",
        prix: "799€",
        image: "images/ordinateur portable.jpg"
    },
    {
        titre: "Casque Audio",
        description: "Casque audio avec réduction de bruit active.",
        prix: "199€",
        image: "images/casque.jpg"
    },
    {
        titre: "Caméra",
        description: "Caméra haute résolution pour capturer chaque instant.",
        prix: "299€",
        image: "images/appareil photo.jpg"
    }
];

// Fonction pour afficher les produits
function afficherProduits() {
    const produitContainer = document.getElementById('produit-container');

    let contenuHTML = produits.map(produit => `
        <div class="produit-card">
            <img src="${produit.image}" alt="${produit.titre}">
            <h3>${produit.titre}</h3>
            <p>${produit.description}</p>
            <button>Acheter - ${produit.prix}</button>
        </div>
    `).join('');

    produitContainer.innerHTML = contenuHTML;
}

// Afficher les produits au chargement de la page
window.onload = afficherProduits;
