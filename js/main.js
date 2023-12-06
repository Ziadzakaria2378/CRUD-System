var ProductNameInput = document.getElementById("ProductName");
var ProductCategoryInput = document.getElementById("ProductCategory");
var ProductPriceInput = document.getElementById("ProductPrice");
var ProductDescriptionInput = document.getElementById("ProductDescription");

var productContainer = [];

if (localStorage.getItem("products") != null) {
  productContainer = JSON.parse(localStorage.getItem("products"));
}

function addProduct() {
  var productobj = {
    name: ProductNameInput.value,
    category: ProductCategoryInput.value,
    Price: ProductPriceInput.value,
    Description: ProductDescriptionInput.value,
  };
  productContainer.unshift(productobj);

  localStorage.setItem("products", JSON.stringify(productContainer));

  displayProducts();
  clearInputs();
}

function displayProducts() {
  var cartona = ``;
  for (var i = 0; i < productContainer.length; i++) {
    cartona += `
        <tr class="text-white">
         <td>${i}</td>
         <td>${productContainer[i].name}</td>
         <td>${productContainer[i].category}</td>
         <td>${productContainer[i].Price}</td>
         <td>${productContainer[i].Description}</td>
         <td><button onclick="deleteProduct(${i})" class="btn btn-outline-warning  btn-sm">Delete</button></td>
         <td><button class="btn btn-outline-success btn-sm">Updata</button></td>          
        </tr>
        `;
  }

  document.getElementById("tbody").innerHTML = cartona;
}

displayProducts();

function clearInputs() {
  ProductNameInput.value = "";
  ProductCategoryInput.value = "";
  ProductPriceInput.value = "";
  ProductDescriptionInput.value = "";
}

function deleteProduct(Index) {
  productContainer.splice(Index, 1);

  localStorage.setItem("products", JSON.stringify(productContainer));
  displayProducts();
}

function search() {
  var searchInput = document.getElementById("searchInput").value;
  var box2 = ``;
  for (var i = 0; i < productContainer.length; i++) {
    if (
      productContainer[i].name.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      box2 += `
       <tr class="text-white">
       <td>${i}</td>
       <td>${productContainer[i].name}</td>
       <td>${productContainer[i].category}</td>
       <td>${productContainer[i].Price}</td>
       <td>${productContainer[i].Description}</td>
       <td><button onclick="deleteProduct(${i})" class="btn btn-outline-warning btn-sm">Delete</button></td>
       <td><button class="btn btn-outline-success btn-sm">Updata</button></td>          
      </tr>
       
       `;
    }
  }
  document.getElementById("tbody").innerHTML = box2;
}
