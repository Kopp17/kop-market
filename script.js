* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  background: #f4f6fb;
}

/* HEADER */
.header {
  position: sticky;
  top: 0;
  background: #fff;
  padding: 12px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ff6600;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo img {
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
}

.logo span {
  font-weight: 800;
  font-size: 1.3rem;
  background: linear-gradient(135deg, #ff6600, #ff9933);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* CART BUTTON */
.cart-btn {
  position: relative;
  background: #ff6600;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 700;
  transition: transform 0.2s, background 0.2s;
}

.cart-btn:hover {
  background: #e55a00;
  transform: scale(1.05);
}

.badge-cart {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #000;
  color: #fff;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
}

/* SEARCH */
.search {
  padding: 20px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.search input {
  width: 60%;
  max-width: 500px;
  padding: 14px 20px;
  border-radius: 50px;
  border: none;
  font-size: 16px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.search input:focus {
  outline: none;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

/* LAYOUT */
.container {
  display: flex;
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

/* SIDEBAR */
.sidebar {
  width: 240px;
}

.sidebar button {
  width: 100%;
  padding: 14px;
  margin-bottom: 10px;
  border: none;
  background: #fff;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
  text-align: left;
  font-size: 16px;
}

.sidebar button:hover {
  background: #ff6600;
  color: #fff;
  transform: translateX(5px);
}

.sidebar button.active {
  background: #ff6600;
  color: #fff;
}

/* PRODUCTS GRID */
.products {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 25px;
}

/* PRODUCT CARD */
.card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: #f0f0f0;
}

.card-content {
  padding: 16px;
}

.card-content h4 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: #333;
}

.price {
  font-size: 1.3rem;
  font-weight: 800;
  color: #ff6600;
  margin: 10px 0;
}

.add {
  width: 100%;
  padding: 12px;
  background: #ff6600;
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

.add:hover {
  background: #e55a00;
}

/* MODAL */
.modal {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  width: 90%;
  max-width: 450px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 25px;
  border-radius: 20px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-content h3 {
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.close {
  float: right;
  font-size: 24px;
  cursor: pointer;
  transition: color 0.2s;
}

.close:hover {
  color: #ff6600;
}

/* CART ITEMS */
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.cart-item-info {
  flex: 1;
}

.cart-item-name {
  font-weight: 500;
  display: block;
}

.cart-item-price {
  color: #ff6600;
  font-weight: 600;
  font-size: 0.9rem;
}

.remove-item {
  background: #ff4444;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
}

.remove-item:hover {
  background: #cc0000;
}

.empty-cart {
  text-align: center;
  padding: 40px;
  color: #888;
}

.total {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 2px solid #eee;
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
}

/* PAYMENT OPTIONS */
.payment-options {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.order-whatsapp {
  flex: 1;
  padding: 12px;
  background: #25D366;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
}

.order-whatsapp:hover {
  background: #128C7E;
}

.order-momo {
  flex: 1;
  padding: 12px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
}

.order-momo:hover {
  background: #1a252f;
}

/* TOAST */
#toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: #25D366;
  color: #fff;
  padding: 12px 24px;
  border-radius: 50px;
  display: none;
  z-index: 1100;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  animation: fadeInUp 0.3s ease;
}

@keyframes fadeInUp {
  from {
    transform: translate(-50%, 20px);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0);
    opacity: 1;
  }
}

/* NO RESULTS */
.no-results {
  text-align: center;
  padding: 60px;
  font-size: 1.2rem;
  color: #888;
  grid-column: 1 / -1;
}

/* PROMO BANNER */
.promo-banner {
  background: linear-gradient(135deg, #ff6600, #ff9933);
  color: white;
  text-align: center;
  padding: 10px;
  font-weight: 600;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    display: flex;
    gap: 10px;
    overflow-x: auto;
  }
  
  .sidebar button {
    width: auto;
    white-space: nowrap;
    text-align: center;
  }
  
  .search input {
    width: 90%;
  }
  
  .products {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 15px;
  }
  
  .card img {
    height: 150px;
  }
  
  .payment-options {
    flex-direction: column;
  }
}

/* LOADING SPINNER */
.loading {
  text-align: center;
  padding: 50px;
}

.loading::after {
  content: "";
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #ff6600;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
