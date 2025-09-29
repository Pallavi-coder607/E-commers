const products = [
  {
    name: "Wireless Headphones",
    price: 1499,
    image: "https://via.placeholder.com/250x200?text=Headphones"
  },
  {
    name: "Smart Watch",
    price: 2499,
    image: "https://via.placeholder.com/250x200?text=Smart+Watch"
  },
  {
    name: "Bluetooth Speaker",
    price: 999,
    image: "https://via.placeholder.com/250x200?text=Speaker"
  },
  {
    name: "Laptop Stand",
    price: 799,
    image: "https://via.placeholder.com/250x200?text=Laptop+Stand"
  },
  {
    name: "Phone Charger",
    price: 499,
    image: "https://via.placeholder.com/250x200?text=Charger"
  }
];

const container = document.getElementById("product-container");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <button>Buy Now</button>
    </div>
  `;

  container.appendChild(card);
});