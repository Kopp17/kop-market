// PRODUITS
const products = [
  {id:1, name:"New Balance 1000", price:18000, category:"chaussures", image:"images/chaussures/newbalance.jpg"},
  {id:2, name:"Nike Air Force 1", price:20000, category:"chaussures", image:"images/chaussures/nikeairforce.jpg"},
  {id:3, name:"Adidas Ultraboost", price:25000, category:"chaussures", image:"images/chaussures/adidas.jpg"},
  {id:4, name:"T-shirt Zara Premium", price:8000, category:"habits", image:"images/habits/tshirt.jpg"},
  {id:5, name:"Nike Sportswear", price:35000, category:"habits", image:"images/habits/nikesweat.jpg"},
  {id:6, name:"Chemise Zara", price:15000, category:"habits", image:"images/habits/zara.jpg"},
  {id:7, name:"PC HP EliteBook", price:350000, category:"ordinateurs", image:"images/ordinateurs/hp.jpg"},
  {id:8, name:"MacBook Pro M2", price:850000, category:"ordinateurs", image:"images/ordinateurs/macbook.jpg"},
  {id:9, name:"Dell XPS 13", price:450000, category:"ordinateurs", image:"images/ordinateurs/dell.jpg"}
];

let currentProducts = [...products];
let cart = [];

// INITIALISATION
function init() {
  displayProducts(currentProducts);
  loadCartFromStorage();
}

// AFFICHER LES PRODUITS
function displayProducts(productsToShow) {
  const container = document.getElementById("products");
  if (!container) return;
  
  if (productsToShow.length === 0) {
    container.innerHTML = '<div class="no-results">🔍 Aucun produit trouvé<br><small>Essayez une autre recherche</small></div>';
    return;
  }

  container.innerHTML = productsToShow.map(product => `
    <div class="card">
      <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Image+non+disponible'">
      <div class="card-content">
        <h4>${product.name}</h4>
        <div class="price">${product.price.toLocaleString()} FCFA</div>
        <button class="add" onclick="addToCart(${product.id})">🛒 Ajouter au panier</button>
      </div>
    </div>
  `).join('');
}

// FILTRER PAR CATEGORIE
function filterCategory(category) {
  if (category === 'all') {
    currentProducts = [...products];
  } else {
    currentProducts = products.filter(p => p.category === category);
  }
  displayProducts(currentProducts);
  
  // Mettre à jour le bouton actif
  document.querySelectorAll('.sidebar button').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.includes(category === 'all' ? 'Tous' : category)) {
      btn.classList.add('active');
    }
  });
}

// RECHERCHER
function searchProduct(query) {
  if (!query.trim()) {
    displayProducts(currentProducts);
    return;
  }
  const filtered = currentProducts.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase())
  );
  displayProducts(filtered);
}

// AJOUTER AU PANIER
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  cart.push({...product});
  updateCartUI();
  saveCartToStorage();
  showToast(`${product.name} ajouté au panier ✅`);
}

// RETIRER DU PANIER
function removeFromCart(index) {
  const removedItem = cart[index];
  cart.splice(index, 1);
  updateCartUI();
  saveCartToStorage();
  showToast(`${removedItem.name} retiré du panier ❌`);
}

// METTRE À JOUR L'INTERFACE DU PANIER
function updateCartUI() {
  const cartItemsContainer = document.getElementById("cartItems");
  const totalContainer = document.getElementById("total");
  const cartCount = document.getElementById("cartCount");
  
  if (!cartItemsContainer) return;
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<div class="empty-cart">🛒 Votre panier est vide<br><small>Ajoutez des produits pour commander</small></div>';
    if (totalContainer) totalContainer.innerHTML = '';
    if (cartCount) cartCount.textContent = '0';
    return;
  }
  
  let total = 0;
  cartItemsContainer.innerHTML = cart.map((item, index) => {
    total += item.price;
    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-price">${item.price.toLocaleString()} FCFA</span>
        </div>
        <button class="remove-item" onclick="removeFromCart(${index})">🗑️</button>
      </div>
    `;
  }).join('');
  
  if (totalContainer) {
    totalContainer.innerHTML = `<strong>Total: ${total.toLocaleString()} FCFA</strong>`;
  }
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

// COMMANDE VIA WHATSAPP
function orderWhatsApp() {
  if (cart.length === 0) {
    showToast("Votre panier est vide !", "#ff4444");
    return;
  }
  
  const phone = "2250758167537";
  let message = "*🛍️ NOUVELLE COMMANDE kop's Market*%0A";
  message += "━━━━━━━━━━━━━━━━━━%0A%0A";
  
  let total = 0;
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name}%0A`;
    message += `   💰 ${item.price.toLocaleString()} FCFA%0A%0A`;
    total += item.price;
  });
  
  message += "━━━━━━━━━━━━━━━━━━%0A";
  message += `📦 *TOTAL: ${total.toLocaleString()} FCFA*%0A`;
  message += "━━━━━━━━━━━━━━━━━━%0A%0A";
  message += "👤 Nom du client: %0A";
  message += "📍 Adresse de livraison: %0A";
  message += "📞 Téléphone: %0A";
  message += "💬 Commentaire: %0A%0A";
  message += "_Merci de votre commande !_ 🙏";
  
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// PAIEMENT MOBILE MONEY
function orderMobileMoney() {
  if (cart.length === 0) {
    showToast("Votre panier est vide !", "#ff4444");
    return;
  }
  
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const transactionCode = Math.floor(Math.random() * 900000) + 100000;
  
  const modalContent = `
    <div style="text-align: center;">
      <h3>💳 Paiement Mobile Money</h3>
      <p>Montant à payer: <strong>${total.toLocaleString()} FCFA</strong></p>
      <p>Numéro: <strong>07 58 16 75 37</strong></p>
      <hr>
      <p>Code de transaction: <strong style="font-size: 24px;">${transactionCode}</strong></p>
      <p><small>Validez ce code dans votre application Mobile Money</small></p>
      <button onclick="confirmMobileMoneyPayment(${transactionCode}, ${total})" style="margin-top: 15px; padding: 12px 24px; background: #ff6600; color: white; border: none; border-radius: 10px; cursor: pointer;">✅ J'ai payé</button>
    </div>
  `;
  
  const modal = document.getElementById("cartModal");
  const modalContentDiv = document.querySelector(".modal-content");
  modalContentDiv.innerHTML = modalContent + '<span class="close" onclick="closeAndResetModal()">✖</span>';
  modal.style.display = "flex";
}

function confirmMobileMoneyPayment(code, amount) {
  showToast("Paiement en attente de vérification...", "#ff6600");
  setTimeout(() => {
    showToast("✅ Commande confirmée ! Merci", "#25D366");
    closeAndResetModal();
    cart = [];
    updateCartUI();
    saveCartToStorage();
  }, 2000);
}

function closeAndResetModal() {
  closeCart();
  setTimeout(() => {
    location.reload();
  }, 500);
}

// OUVRIR/FERMER LE PANIER
function openCart() {
  const modal = document.getElementById("cartModal");
  if (modal) modal.style.display = "flex";
}

function closeCart() {
  const modal = document.getElementById("cartModal");
  if (modal) modal.style.display = "none";
}

// TOAST NOTIFICATION
function showToast(message, bgColor = "#25D366") {
  const toast = document.getElementById("toast");
  if (!toast) return;
  
  toast.textContent = message;
  toast.style.backgroundColor = bgColor;
  toast.style.display = "block";
  
  setTimeout(() => {
    toast.style.display = "none";
  }, 2500);
}

// SAUVEGARDER LE PANIER
function saveCartToStorage() {
  localStorage.setItem("kopMarketCart", JSON.stringify(cart));
}

// CHARGER LE PANIER
function loadCartFromStorage() {
  const saved = localStorage.getItem("kopMarketCart");
  if (saved) {
    cart = JSON.parse(saved);
    updateCartUI();
  }
}

// FERMER MODAL EN CLIQUANT À L'EXTÉRIEUR
window.onclick = function(event) {
  const modal = document.getElementById("cartModal");
  if (event.target === modal) {
    closeCart();
  }
}

// DÉMARRAGE
init();
