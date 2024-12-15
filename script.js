document.addEventListener("DOMContentLoaded", () => {
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

    const produitConteneur = document.querySelector(".produits");
    produitConteneur.innerHTML = produits.map(produit => `
        <div class="produit-carte">
            <img src="${produit.image}" class="card-img-top" alt="${produit.titre}">
            <div class="card-body">
                <h5 class="card-title">${produit.titre}</h5>
                <p class="card-text">${produit.description}</p>
                <button class="btn btn-primary">Acheter - ${produit.prix}</button>
            </div>
        </div>
    `).join("");
});
