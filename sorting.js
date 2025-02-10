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
  
      products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card', 'col-md-3', 'p-3');
        
        card.innerHTML = `
        <div class="card rounded-2 mt-5">
        <div class="d-flex flex-column flex-md-nowrap flex-wrap ">
            <div class=" img-cont d-flex justify-content-center  w-md-100">
                <img src="${product.img}" alt="prod" width="300px">
            </div>
            <div class="detail-cont">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <h5 class="mb-0">${product.name}</h5>
                    </li>
                    <li class="list-group-item">₹ ${product.price}</li>
                    <li class="list-group-item">${product.id}</li>
                    <li class="list-group-item">${product.desc}</li>
                </ul>
            </div>
        </div>
    </div>

        `;


    
        
        listContainer.appendChild(card);
      });
    }
  
    // Sorting function
    function sorting() {
      let items = getAllDataFromLocalStorage();
      console.log(items);
      
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
          }
  
          displayProducts(sortedItems); 
        });
      }
    }
  
    sorting(); 
  });
  