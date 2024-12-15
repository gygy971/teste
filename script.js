document.addEventListener('DOMContentLoaded', () => {
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

    const container = document.getElementById('produit-container');

    produits.forEach(produit => {
        const produitElement = document.createElement('div');
        produitElement.classList.add('produit');
        produitElement.innerHTML = `
            <img src="${produit.image}" alt="${produit.titre}">
            <h3>${produit.titre}</h3>
            <p>${produit.description}</p>
            <button>Acheter - ${produit.prix}</button>
        `;
        container.appendChild(produitElement);
    });
});
