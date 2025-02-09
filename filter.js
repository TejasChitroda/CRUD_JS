document.addEventListener("DOMContentLoaded", function () {
  // Get all items from local storage
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

  let items = getAllDataFromLocalStorage();
  console.log(items);

  let list = document.getElementById("filter_items");
  console.log(list);

  // listener on search buttonr
  document
    .getElementById("filter_button")
    .addEventListener("click", function (event) {
      event.preventDefault();

      let searchItem = document
        .getElementById("search")
        .value.trim()
        .toLowerCase(); // Trim and convert to lowercase
      console.log("Searched Item:", searchItem);

      let filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchItem)
      );

      console.log("Filtered Items:", filteredItems);

      // Clear previous results
      // list.innerHTML = '';

      // Display filtered results
      filteredItems.forEach((item) => {
        let newElement = document.createElement("div");
        newElement.innerHTML = `
                <div class="card shadow me-5" style="width: 15rem;">
                    <img src="${item.img}" class="card-img-top" alt="Product Image">
                    <div class="card-body p-0">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <h5 class="mb-0">${item.name}</h5>
                            </li>
                            <li class="list-group-item">${item.desc}</li>
                            <li class="list-group-item">₹${item.price}</li>
                        </ul>
                    </div>
                </div>
            `;
        list.appendChild(newElement);
      });
    });
});
