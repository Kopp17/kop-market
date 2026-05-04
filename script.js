const products = [
  {id:1, name:"New Balance 1000", price:18000, category:"chaussures", image:"images/chaussures/nike.jpg"},
  {id:2, name:"Nike Air Force 1", price:20000, category:"chaussures", image:"images/chaussures/nike.jpg"},
  {id:3, name:"T-shirt Zara", price:8000, category:"habits", image:"images/habits/tshirt.jpg"},
  {id:4, name:"NIKE", price:150000, category:"habits", image:"images/ordinateurs/pc.jpg"},
  {id:5, name:"PC HP Elite", price:150000, category:"habits", image:"images/ordinateurs/pc.jpg"},
  {id:6, name:"PC HP Elite", price:150000, category:"ordinateurs", image:"images/ordinateurs/pc.jpg"},
  {id:7, name:"PC HP Elite", price:150000, category:"ordinateurs", image:"images/ordinateurs/pc.jpg"},
];

let current = products;
let cart = [];

function display(list){
  const c = document.getElementById("products");
  c.innerHTML = "";

  list.forEach(p=>{
    c.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <div class="card-content">
          <h4>${p.name}</h4>
          <div class="price">${p.price} FCFA</div>
          <button class="add" onclick="add(${p.id})">Ajouter</button>
        </div>
      </div>
    `;
  });
}

function filterCategory(cat){
  current = cat === "all" ? products : products.filter(p=>p.category===cat);
  display(current);
}

function searchProduct(val){
  const f = current.filter(p=>p.name.toLowerCase().includes(val.toLowerCase()));
  display(f);
}

function add(id){
  cart.push(id);
  updateCart();
  toast();
}

function updateCart(){
  const box = document.getElementById("cartItems");
  const total = document.getElementById("total");
  const count = document.getElementById("cartCount");

  box.innerHTML = "";
  let sum = 0;

  cart.forEach(id=>{
    const p = products.find(x=>x.id===id);
    sum += p.price;

    box.innerHTML += `
      <div class="cart-item">
        <span>${p.name}</span>
        <span>${p.price}</span>
      </div>
    `;
  });

  total.innerText = "Total: " + sum;
  count.innerText = cart.length;
}

function openCart(){
  document.getElementById("cartModal").style.display="flex";
}

function closeCart(){
  document.getElementById("cartModal").style.display="none";
}

function orderWhatsApp(){
  let phone = "225XXXXXXXX";
  let msg = "Commande:%0A";

  cart.forEach(id=>{
    const p = products.find(x=>x.id===id);
    msg += p.name + " - " + p.price + "%0A";
  });

  window.open("https://wa.me/"+phone+"?text="+msg);
}

function toast(){
  const t = document.getElementById("toast");
  t.style.display="block";
  setTimeout(()=>t.style.display="none",2000);
}

display(products);