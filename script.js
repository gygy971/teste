document.addEventListener("DOMContentLoaded", () => {
    // Liste des produits avec leurs informations
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
            image: "images/ordinateur-portable.jpg"
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
            image: "images/appareil-photo.jpg"
        }
    ];

    // Sélection de l'élément conteneur pour afficher les produits
    const produitConteneur = document.querySelector(".produits");

    // Génération dynamique du contenu HTML pour les produits
    produitConteneur.innerHTML = produits.map(produit => `
        <div class="col">
            <div class="card produit-carte">
                <img src="${produit.image}" class="card-img-top" alt="${produit.titre}">
                <div class="card-body">
                    <h5 class="card-title">${produit.titre}</h5>
                    <p class="card-text">${produit.description}</p>
                    <button class="btn btn-primary">Acheter - ${produit.prix}</button>
                </div>
            </div>
        </div>
    `).join("");
});
