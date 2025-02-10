document.addEventListener("DOMContentLoaded", function () {
  function viewProductDetails() {
    // getting id from URL
    const getIdFromUrl = new URLSearchParams(window.location.search);
    const productId = getIdFromUrl.get("id");

    // getting product details from localStorage
    let data = localStorage.getItem(productId);
    let productDetails = JSON.parse(data);
    console.log(productDetails);

    let newElement = document.createElement("div");

    newElement.innerHTML = `
        
         <div class="card rounded-2 mt-5">
            <div class="d-flex flex-column flex-md-nowrap flex-wrap ">
                <div class=" img-cont d-flex justify-content-center  w-md-100">
                    <img src="${productDetails.img}" alt="prod" width="300px">
                </div>
                <div class="detail-cont">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <h5 class="mb-0">${productDetails.name}</h5>
                        </li>
                        <li class="list-group-item">₹ ${productDetails.price}</li>
                        <li class="list-group-item">${productId}</li>
                        <li class="list-group-item">${productDetails.desc}</li>
                    </ul>
                </div>
            </div>
        </div>
    
        
        `;

    let displayProduct = document.getElementById("viewProduct");

    if (!displayProduct) {
      console.log("Error: 'viewProduct' element not found!");
      return;
    }

    // Appending the new product details
    displayProduct.appendChild(newElement);
  }

  viewProductDetails();
});
