function generateUniqueId() {
  return Date.now() + "_" + Math.floor(Math.random() * 10000);
}

function addProducts() {
  // Get details
  let productName = document.getElementById("productName").value.trim();
  let productPrice = document.getElementById("price").value.trim();
  let productDescription = document.getElementById("description").value.trim();
  let productImg = document.getElementById("imageURL").value.trim();

  // Validation for empty fields
  if (!productName || !productPrice || !productDescription || !productImg) {
    alert("All fields are required!");
    return;
  }

  // Generating uniwue product ID
  let productId = generateUniqueId();

  // product object
  let product = {
    id: productId,
    name: productName,
    price: parseFloat(productPrice).toFixed(2), // Convert price to number format
    img: productImg,
    desc: productDescription,
  };

  // productId as key, product details as value
  localStorage.setItem(productId, JSON.stringify(product));

  // Alert user and reset form
  alert("Product added successfully!");

  document.getElementById("productForm").reset();

  // redirection to home page
  window.location.href = "index.html";
}

// Attach event listener to form submission
document
  .getElementById("productForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addProducts();
  });
