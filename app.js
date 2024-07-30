
const menu=[
    {name:'Espresso',price:2.00},
    {name:'Latte',price:3.85},
    {name:'Cappuccino',price:3.00},
    {name:'Mocha',price:3.75},
    {name:'cold-coffee',price:3.05},
];

const menuList=document.getElementById('menu-list');
const orderList=document.getElementById('order-list');
const totalPriceEl=document.getElementById('total-price');
const placeOrderButton=document.getElementById('place-order');


let order=[];
let totalPrice=0;

// Function to render the menu

function renderMenu(){
    menu.forEach(item=>{
        const li=document.createElement('li');
        li.textContent=`${item.name}- $${item.price.toFixed(2)}`;
        const addButton=document.createElement('button');
        addButton.textContent='Add';
        addButton.onclick=()=>addToOrder(item);
        li.appendChild(addButton);
        menuList.appendChild(li);
    });
}

// Function to add an item to the order

function addToOrder(item){
    order.push(item);
    const li = document.createElement('li');
    li.textContent=`${item.name} -$${item.price.toFixed(2)}`;
    orderList.appendChild(li);
    updateTotalPrice(item.price);

}

// function to udate the toatal price

function updateTotalPrice(price){
    totalPrice+=price;
    totalPriceEl.textContent=totalPrice.toFixed(2);
}

// function to place the order

function placeOrder(){
    if(order.length===0){
        alert('your order is empty');
    }else{
        alert('Thank you for your order');
    }

    // reset the order

    order=[];
    orderList.innerHTML='';
    totalPrice=0;
    totalPriceEl.textContent=totalPrice.toFixed(2);
}

// initialize the app

renderMenu();
placeOrderButton.onclick=placeOrder;