"use strict";


function Meal(name, price,image ) {
  this.name = name;
  this.price = price;
  this.image = image;

  this.description = function () {
    return `${this.name} ${this.price} ${this.image}`;
  };
}


const form = document.getElementById("Meal-form");
const orderList = document.getElementById("orderlist");
const clear = document.getElementById('clear-click')

let ordersArr = [];
getLocalStorage();
renderData();

// form add clear listner
form.addEventListener("submit",function (event) {
    
    event.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;


    const newOrder = new Meal(name, price, image);

    ordersArr.push(newOrder);
    setLocalStorage()
    renderData();
    form.reset();
    

  }
);

clear.addEventListener('click', function(event) {

  event.preventDefault();
  document.getElementById('orderlist').innerHTML = '';
  localStorage.clear();
   ordersArr = [];
});




function renderData() {
  
  orderList.innerHTML ='';
  ordersArr.forEach((orders) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `${orders.name} - ${orders.price} <img src= "${orders.image}">
     `;
    orderList.appendChild(listItem);
  });
}

function setLocalStorage() {
  localStorage.setItem("listItem", JSON.stringify(ordersArr));
}

function getLocalStorage() {
  const shopList = localStorage.getItem("listItem");

  if(shopList){
    ordersArr = JSON.parse(shopList);
}
  
} 


