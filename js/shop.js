// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
 

let item = products.find((element) => element.id == id);

let itemCart = cart.find((element) => element.id == id);

if (itemCart == undefined) {

    let insertProduct = { ...item, quantity: 1 };
    cart.push(insertProduct);

  } else {

    cart.map((item) => {
      
      if (item.id == id) {
        
        item.quantity = item.quantity + 1;
      
     }
    });

  }


    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
}

// Exercise 2
function cleanCart() {

    while(cart.length > 0){ //while there is item then delete items in cart

        cart.pop();

    }

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    const totalPrice = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);

    return totalPrice;
    
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions

    // check if offer property exist
    const reduceProduct = cart.filter((item) => item.hasOwnProperty("offer"));
    // if quantity is bigger or equal to number then calculated the price.
    reduceProduct.map((item) => {
        if(item.quantity >= item.offer.number){
            
            item.subtotalWithDiscount = item.price - (item.price * item.offer.percent)/100;
            //alert(item.subtotalWithDiscount);
        }
    });

}

// This is a test to see if applyPromotionsCart function works.
// Wait DOM is loaded
//document.addEventListener('DOMContentLoaded', function() {
    // Button element discount
//    const button = document.getElementById('discount');
    
    // Verify button with the function applyPromotionsCart
//    if (button) {
//        button.onclick = applyPromotionsCart;
//    } else {
//        console.error('It cannot find the id "myButton"');
//    }
//});

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

        let table = document.getElementById('cart_list');
        table.innerHTML = "";

        let sumPrice = document.getElementById('total_price');
        sumPrice.innerHTML = "";

        //let sum;

        applyPromotionsCart();

        cart.forEach(element => {
            let row = document.createElement("tr");

            let name_cell = document.createElement("th");

            name_cell.textContent = element.name;
            
            row.appendChild(name_cell);

            let specialPrice = 0;

            if(element.hasOwnProperty("subtotalWithDiscount")){

                specialPrice = element.subtotalWithDiscount;

            } else{

                specialPrice = element.price;
            }

            let priceRow = document.createElement("td");

            priceRow.textContent = specialPrice;

            row.appendChild(priceRow);

            let quantityRow = document.createElement("td");

            quantityRow.textContent = element.quantity;

            row.appendChild(quantityRow);

            let totalRow = document.createElement("td");

            totalRow.textContent = specialPrice * element.quantity; // total price item with discount and quantity

            //sum = sum + parseFloat(totalRow.textContent); // calculate total with discount

            row.appendChild(totalRow);


            table.appendChild(row);
        });

        //sumPrice.innerHTML = sum;
        sumPrice.innerHTML = calculateTotal(); // no discount

}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}