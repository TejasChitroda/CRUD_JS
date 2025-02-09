function listProducts() {
  let list = document.getElementById("list");
  list.innerHTML = ""; // Clear previous items

  if (localStorage.length === 0) {
    list.innerHTML = '<h3 class="text-center">No Products Found</h3>';
    return;
  }

  // Iterate through all keys in localStorage
  Object.keys(localStorage).forEach((productId) => {
    let item = JSON.parse(localStorage.getItem(productId));
    console.log(item);
    // Ensure item is valid
    if (!item || !item.name || !item.price || !item.img) {
      return;
    }

    let newItem = document.createElement("div");
    newItem.innerHTML = `
            <div class="card shadow" style="width: 15rem;">
                <img src="${item.img}" class="card-img-top" alt="Product Image" height="200px" width = "150px">
                <div class="card-body p-0">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <h5 class="mb-0">${item.name}</h5>
                        </li>
                        <li class="list-group-item">
                            <h5 class="mb-0">${item.desc}</h5>
                        </li>
                        <li class="list-group-item">₹${item.price}</li>
                    </ul>
                    <div class="d-flex justify-content-evenly my-2">
                        <a href="viewProduct.html?id=${productId}" class="btn btn-primary">View</a>
                        <a href="updateProduct.html?id=${productId}" class="btn btn-success">Update</a>
                        <button onclick="deleteProduct('${productId}')" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>`;

    list.appendChild(newItem);
    console.log(list)
  });
}

// Function to delete a product
function deleteProduct(productId) {
  if (confirm("Are you sure you want to delete this product?")) {
    localStorage.removeItem(productId);
    listProducts(); // Refresh the product list
  }
}

// Run listProducts when page loads
document.addEventListener("DOMContentLoaded", listProducts);
