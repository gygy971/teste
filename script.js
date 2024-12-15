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
    image: "images/laptop.jpg" 
  },
  { 
    titre: "Casque Audio", 
    description: "Casque audio avec réduction de bruit active.", 
    prix: "199€", 
    image: "images/headphones.jpg" 
  },
  { 
    titre: "Caméra", 
    description: "Caméra haute résolution pour capturer chaque instant.", 
    prix: "299€", 
    image: "images/camera.jpg" 
  }
];

// Génération dynamique des produits
const productContainer = document.querySelector(".product-list");

produits.forEach(produit => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  productCard.innerHTML = `
    <img src="${produit.image}" alt="${produit.titre}">
    <h3>${produit.titre}</h3>
    <p>${produit.description}</p>
    <button>Acheter - ${produit.prix}</button>
  `;

  productContainer.appendChild(productCard);
});
