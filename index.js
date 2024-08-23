const menuItems=[
    {
       image:"image/image-waffle-desktop.jpg",
      
       name: "Waffle with Berries",
       category: "Waffle",
       price: 6.50,

    },
    {
        image:"image/image-creme-brulee-desktop.jpg",
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.00
     },
     {
        image:"image/image-macaron-desktop.jpg",
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.00
     },
     {
        image:"image/image-tiramisu-desktop.jpg",
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.50
     },
     {
        image:"image/image-baklava-desktop.jpg",
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.00
     },
     {
        image:"image/image-meringue-desktop.jpg",
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.00
     },
    {
        image:"image/image-cake-desktop.jpg",
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.50
     },
     {
        image:"image/image-brownie-desktop.jpg",
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.50
     },
     {
        image:"image/image-panna-cotta-desktop.jpg",
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.50
     }
]

let menuContainerGrid= document.querySelector(".menuContainerGrid");
window.addEventListener("DOMContentLoaded",function(){

    let displayMenuItems= menuItems.map(items=> {
        return ` 
                <div class="menuContent">
                    <img class="menuImage" src="${items.image}" alt="${items.name}">
        
                    <button class="cart"><img class="btnImg" src="image/icon-add-to-cart.svg" alt="">Add to Cart</button>
            <div class="quantityBtn hiddenclass">
                <button class="decrement">-</button>
                   <span class="message">1</span>
                    <button class="increment">+</button>
                    </div>
        
                <p>${items.category}</p>
                <h4>${items.name}</h4>
                <h5>$${items.price}</h5>
                </div> `
        
        }).join("")
        menuContainerGrid.innerHTML= displayMenuItems;
        let cartBtn= document.querySelectorAll(".cart");
        let quantityBtnToggle= document.querySelectorAll(".quantityBtn");



 cartBtn.forEach((element,index)=> {
    let quantityBtn= quantityBtnToggle[index];
let count=1;


  element.addEventListener("click",function(e){
e.preventDefault()
if(quantityBtn.classList.contains("hiddenclass")){
    quantityBtn.classList.remove("hiddenclass")
    element.classList.add("hiddenclass")

    let incrementBtn= quantityBtn.querySelector(".increment");
    let decrementBtn= quantityBtn.querySelector(".decrement");
    let message=quantityBtn.querySelector(".message");
    
incrementBtn.addEventListener("click",()=> {
    count++;
    message.textContent=count;

});

decrementBtn.addEventListener("click",()=> {
    if(count > 1){
    count--;
    message.textContent=count;
    }})
    
}else{
    quantityBtn.classList.add("hiddenclass");
    element.classList.remove("hiddenclass")
}

})

  })


  function AddToCart(){}

});
  





























// let message=document.querySelector(".message");
// 
// let hiddenDivToggle= document.querySelector(".hiddenDiv");
//  let flexList= document.querySelector(".flexList");



   

// let count=0;
// function ItemsButton(itemsBtn){

//     itemsBtn.forEach(element => {
// element.addEventListener("click",function(){
  
// })

//     });
// }

// ItemsButton(cartBtn)