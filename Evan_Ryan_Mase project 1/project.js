let notPurchased = []
let groceryList = []
  function addItem(){
    for(i = 0; i<Infinity; i++){
    let item = prompt("What item do you want to add to the grocery list?").toLowerCase();
    if(groceryList.indexOf(item, 0) === -1 ){
      groceryList.push(item)
      if(notPurchased.indexOf(item,0) === -1){
      notPurchased.push(item)
      }

      alert("item has been added")
    }
    else {alert("item is already present")
    break;
}
console.log(groceryList)
console.log(notPurchased)
btn = document.createElement("button") 
btn.innerHTML = item ; //inner.HTML button = user input item
btn.className = "btnClass" 
btn.id ="btn1"
btn.onclick= function() {strikeOut(this)} //calling strikeout function on click for each button created 
document.body.appendChild(btn) //appending btns to body might change to make more organized if possible
  }
  }

  //define a class for each element made btnClass for buttons made from user input
  //only show purchased items ie. cart, only show unpurchased items ie. items left in grocery list, and show all items cart and grocery list

  let cart = []
  function strikeOut(x){ //x refering to this, this referring to userinput
    if(x.classList.contains("class1")){
       //checking if the user input has class which is line through 
      x.classList.remove("class1") //if it has class1 will remove
     y = cart.indexOf(x.innerHTML) //setting y to cart.indexof(x.innerhtml)which is whatever user input and was turned into button
      cart.splice(y,1)// removing from array if not in cart anymore meaning user wouldve unclicked to take out of list
      
    }
    else if(!x.classList.contains("class1")){//if user input does not have line through
      // console.log(x.innerHTML)
      cart.push(x.innerHTML)//add to cart array
      x.classList.add("class1") //add linethrough in css
    }
    console.log(cart)
    cart1 = document.getElementById("cart")//reffering to element in html 
    cart1.className = "cart1Class"
  }

function purchased(){
  cart1.innerHTML = ''
  // console.log("hello world")
  let cartItem = document.getElementsByClassName("btnClass")
  for(i=0 ;i<cartItem.length; i++){
  // if(cartItem.classList.contains())
  cartItem[i].style.display = "none"
  }
  console.log(cart)
  for(i = 0; i < cart.length; i++){ //for loop to print cart items
    cart1.style.textDecoration = "line-through"
    cart1.innerHTML = cart1.innerHTML + cart[i]+ "<br>"
  }
}

function unpurchased(){
  cart1.innerHTML = ''
  let cartItem = document.getElementsByClassName("btnClass")
  for(i=0 ;i<cartItem.length; i++){
     cartItem[i].style.display = "none"
}
 let unpurchasedItems = document.getElementsByClassName("btnClass")
 for(i = 0; i < unpurchasedItems.length; i++)
 if(!unpurchasedItems[i].classList.contains("class1")){
  cart1.style.textDecoration ='none'
    cart1.innerHTML = cart1.innerHTML + unpurchasedItems[i].innerHTML+ "<br>"
 }
}

function viewAll(){
  cart1.innerHTML= ""
  let viewAll = document.getElementsByClassName("btnClass")
  for(i=0 ;i< viewAll.length; i++){
    viewAll[i].classList.remove("class1")
    viewAll[i].style.display = "block"
}
 
}
