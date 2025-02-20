document.addEventListener('DOMContentLoaded', function () {
    // Function to get all data from localStorage
    function getAllDataFromLocalStorage() {
      let items = [];
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        let parsedValue = JSON.parse(value);
        items.push(parsedValue);
      }
      return items;
    }
    
    // Function to display products as cards
    function displayProducts(products) {
      const listContainer = document.getElementById('list');
      listContainer.innerHTML = ''; 
  
      products.forEach((item , index) => {
        const card = document.createElement('div');
        card.classList.add('card', 'col-md-3', 'p-3' , 'd-flex' , 'align-items-center');
        
        card.innerHTML =  `
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
                    <li class="list-group-item">${item.id}</li>
                </ul>
                <div class="d-flex justify-content-evenly my-2">
                    <a href="viewProduct.html?id=${item.id}" class="btn btn-primary">View</a>
                    <a href="updateProduct.html?id=${item.id}" class="btn btn-success">Update</a>
                    <button onclick="deleteProduct('${item.id}')" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>`;
        
        listContainer.appendChild(card);
      });
    }
  
    // Sorting function
    function sorting() {
      let items = getAllDataFromLocalStorage();
      
      const buttons = document.getElementsByClassName('sort');

      for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
          let sortValue = button.value;
          let sortedItems = [];
  
          if (sortValue === 'By Id') {
            sortedItems = items.sort((a, b) => a.id - b.id); // Sort by ID
          } else if (sortValue === 'By Price') {
            sortedItems = items.sort((a, b) => a.price - b.price); // Sort by Price
          } else if (sortValue === 'By Name') {
            sortedItems = items.sort((a, b) => a.name.localeCompare(b.name)); // Sort by Name
          } else {
            sortedItems = items.sort((a, b) => a.id - b.id); // Sort by ID
            
          }
  
          displayProducts(sortedItems); 
        });
      }
    }
  
    sorting(); 
  });
  



  window.onload = function(){
    document.getElementById('byName').click();
    var scriptTag = document.createElement("script");
  scriptTag.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js";document.getElementsByTagName("head")[0].appendChild(scriptTag);
  }