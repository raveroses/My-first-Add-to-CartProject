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


let newArray=[]
function DisplayingImageItems(item){
  let menuContainerGrid= document.querySelector(".menuContainerGrid")
  item.forEach((items,count) => {
     newArray[count]=0;


let menuContentImg= document.createElement("div");
menuContentImg.className="menuContent";

let contentImage= document.createElement("img");
contentImage.className= "menuImage";
contentImage.src= items.image;

let buttonCart= document.createElement("button");
let buttonImage= document.createElement("img");

buttonImage.className="btnImg"
buttonImage.src="image/icon-add-to-cart.svg";
buttonCart.className="cart";

buttonCart.appendChild(buttonImage)
buttonCart.append("Add to Cart")




let quantityBtn= document.createElement("div");
quantityBtn.className="quantityBtn hiddenclass";

let decrement= document.createElement("button");
decrement.className="decrement";
decrement.textContent="-";

let span= document.createElement("span");
span.className="message";
span.textContent="0"

let increment= document.createElement("button");
increment.className="increment";
increment.textContent="+"

quantityBtn.appendChild(increment)
quantityBtn.appendChild(span);
quantityBtn.appendChild(decrement);

let contentWriting= document.createElement("div");
contentWriting.className="contentWriting"
let pman= document.createElement("p");
pman.textContent= items.category;

let hFour= document.createElement("h4");
hFour.textContent= items.name;

let hFive= document.createElement("h5");
hFive.textContent= `$${items.price.toFixed(2)}`;


contentWriting.appendChild(pman);
contentWriting.appendChild(hFour);
contentWriting.appendChild(hFive);




menuContentImg.appendChild(quantityBtn)
menuContentImg.appendChild(buttonCart);
menuContentImg.appendChild(contentImage);
menuContentImg.appendChild(contentWriting)



menuContainerGrid.appendChild(menuContentImg)



















































buttonCart.addEventListener("click",function(e){
   let motherList = document.querySelector(".motherList");
   let  hide= document.querySelector(".hide")
  quantityBtn.classList.remove("hiddenclass");
  buttonCart.classList.add("hiddenclass");

  let main = document.querySelector(".main");
  main.classList.add("hiddenDiv");
  
  hide.classList.remove("hiddenDiv")
// ////// STARTING OF THE SECOND PAGE;



let liCreate= document.createElement("li");
liCreate.className= "flexList";

let divInLi= document.createElement("div");
divInLi.className= "ItemName";
liCreate.appendChild(divInLi)

let hThree= document.createElement("h3");
hThree.className="hthree"
hThree.textContent= `${items.name}`
divInLi.appendChild(hThree)


let para= document.createElement("p");
para.className= "color";
divInLi.appendChild(para)

let spanner= document.createElement("span");
spanner.className="firstSpan";
spanner.textContent=`$${items.price.toFixed(2)}`
spanner.style.paddingRight="10px"
para.appendChild(spanner)


let spannerTwo= document.createElement("span");
spannerTwo.className="secondSpan";
spannerTwo.textContent= `$${(items.price * newArray[count]).toFixed(2)}`;
para.appendChild(spannerTwo)

let cancelDiv= document.createElement("div");
cancelDiv.className= "cancelItem";
liCreate.appendChild(cancelDiv)

let cancelBtn= document.createElement("button");
cancelBtn.textContent= 'x';
cancelBtn.addEventListener("click",function(e){
e.preventDefault();
newArray[count] = 0; 
liCreate.remove()
span.textContent =0;
DisplayIncrementing()
TotalDisplaying();

})



let lastButton= document.querySelector(".lastButton button");
let modal= document.querySelector(".modal")
lastButton.addEventListener("click", function(){
if(modal.classList.contains("hiddenDiv")){
   modal.classList.remove("hiddenDiv");
} 
})




//////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
let motherLists = document.querySelector(".motherLists");




let liorderList= document.createElement("li");
liorderList.className= "orderList";

let divorderImage= document.createElement("div");
divorderImage.className= "orderImage";
liorderList.appendChild(divorderImage)

let image= document.createElement("img");
image.src= `${items.image}`
divorderImage.appendChild(image)


let classOrderFlex= document.createElement("div");
classOrderFlex.className= "classOrderFlex";
liorderList.appendChild(classOrderFlex);


let orderName= document.createElement("div");
orderName.className= "orderName";
classOrderFlex.appendChild(orderName);


let orderNameh4= document.createElement("h4");
orderNameh4.textContent= `${items.name}`
orderName.appendChild(orderNameh4)








let Actualprice= document.createElement("div");
Actualprice.className= "Actualprice";
classOrderFlex.appendChild(Actualprice);


let Actualpricep= document.createElement("p");
Actualpricep.textContent= `$${items.price.toFixed(2)}`
classOrderFlex.appendChild(Actualpricep)




let realPrice= document.createElement("div");
realPrice.className= "realPrice";
liorderList.appendChild(realPrice);


let realPricep= document.createElement("p");
realPricep.textContent= `$${(items.price * newArray[count]).toFixed(2)}`
realPrice.appendChild(realPricep)

// let calculationPlace= document.querySelector(".calculationPlace")



// calculationPlace.appendChild(totals)


motherLists.appendChild(liorderList)

// let newOrderButton= document.querySelector(".newOrder")
// newOrderButton.addEventListener("click", function() {
//    modal.classList.add("hiddenDiv");
//    main.classList.remove("hiddenDiv");
//    hide.classList.add("hiddenDiv");

//    quantityBtn.classList.add("hiddenclass");
//    buttonCart.classList.remove("hiddenclass");
// newArray[count]=0;

// span.textContent=newArray[count];
// liCreate.innerHTML=""
// liorderList.innerHTML=""
// DisplayIncrementing()
// TotalDisplaying();
// });
///////////////////////////////////////////////////////////////////////////////////////////////////////////


  // span.textContent=total

  increment.addEventListener("click", function () {
     newArray[count]++;
     span.textContent =newArray[count] ;
   //   para.textContent=newArray[count]
     spannerTwo.textContent = `$${(items.price * newArray[count]).toFixed(2)}`;
     realPricep.textContent= `$${(items.price * newArray[count]).toFixed(2)}`
    DisplayIncrementing()
    TotalDisplaying();
 });

function DisplayIncrementing(){
 let numberCart= document.querySelector(".NumberCart h3");
 let reduCe= newArray.reduce((quan, num)=> quan + num,0)
 numberCart.textContent = `Your Cart(${reduCe})`;
}


decrement.addEventListener("click",function(e){
e.preventDefault();
if(newArray[count] > 0){
   newArray[count]--
   span.textContent= newArray[count] ;
   // para.textContent=newArray[count]
   spannerTwo.textContent = `$${(items.price * newArray[count]).toFixed(2)}`;
   realPricep.textContent= `$${(items.price * newArray[count]).toFixed(2)}`
   DisplayIncrementing()
   TotalDisplaying();
}
})



cancelDiv.appendChild(cancelBtn)
  motherList.appendChild(liCreate)


  let totals = document.querySelector(".totals h3");

  let total = document.querySelector(".total h3");
  function TotalDisplaying() {
      let cal = newArray.reduce((acc, qty, index) => {
          return acc + qty * menuItems[index].price;
      }, 0);
      total.textContent = `$${cal.toFixed(2)}`;
      totals.textContent= `$${cal.toFixed(2)}`
  }
  

  TotalDisplaying();
  







  DisplayIncrementing()



})
















//forEach
});
//forEach





Reset()
}

DisplayingImageItems(menuItems)







function Reset() {
   let newOrderButton = document.querySelector(".newOrder");
   let quantityBtns = document.querySelectorAll(".quantityBtn");
   let buttonCarts = document.querySelectorAll(".cart");
   let spans = document.querySelectorAll(".message");

   newOrderButton.addEventListener("click", function () {
       let modal = document.querySelector(".modal");
       let main = document.querySelector(".main");
       let hide = document.querySelector(".hide");

       modal.classList.add("hiddenDiv");
       main.classList.remove("hiddenDiv");
       hide.classList.add("hiddenDiv");

     
       newArray.forEach((_, count) => {
           newArray[count] = 0;

           if (quantityBtns[count]) {
               quantityBtns[count].classList.add("hiddenclass");
           }
           if (buttonCarts[count]) {
               buttonCarts[count].classList.remove("hiddenclass");
           }
           if (spans[count]) {
               spans[count].textContent = newArray[count];
           }
       });

       
       document.querySelector(".motherList").innerHTML = "";
       document.querySelector(".motherLists").innerHTML = "";
   });
}






















