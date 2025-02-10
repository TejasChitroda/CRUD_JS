document.addEventListener("DOMContentLoaded", function () {
  // this is for getting old details
  function updateProduct() {
    let paramsFromUrl = new URLSearchParams(window.location.search);

    // Getting product ID from URL
    const productId = paramsFromUrl.get("id");

    if (!productId) {
      alert("Product ID not found in the URL.");
      return;
    }

    const productDetails = JSON.parse(localStorage.getItem(productId));

    if (!productDetails) {
      alert("Product not found in localStorage.");
      return;
    }

    console.log(productDetails);

    // Populating the form fields with product details
    document.getElementById("productName").value = productDetails.name;
    document.getElementById("imageURL").value = productDetails.img;
    document.getElementById("description").value = productDetails.desc;
    document.getElementById("productPrice").value = productDetails.price;
  }

  // form submission and update product details
  function updateProductDetails(event) {
    event.preventDefault();

    // retriving data from form feild
    let name = document.getElementById("productName").value.trim();
    let img = document.getElementById("imageURL").value.trim();
    let description = document.getElementById("description").value.trim();
    let price = document.getElementById("productPrice").value.trim();

    console.log(description);

    // Validate if all fields
    if (!name || !img || !description || !price) {
      alert("Please fill in all fields.");
      return;
    }

    // Getting product ID from URL
    const productIdFromUrl = new URLSearchParams(window.location.search);
    const productId = productIdFromUrl.get("id");

    // Create the updated product object
    const updatedProduct = {
      id: productId,
      name: name,
      price: price,
      desc: description,
      img: img,
    };

    localStorage.setItem(productId, JSON.stringify(updatedProduct));

    alert("Product updated successfully!");

    // redirection to home page
    window.location.href = "index.html";
  }

  const updateForm = document
    .getElementById("updateProduct")
    .addEventListener("submit", updateProductDetails);

  // if (updateForm) {
  //   updateForm.addEventListener("submit", updateProductDetails);
  // } else {
  //   console.error("Form element with id 'updateProduct' not found.");
  // }

  updateProduct();
});
