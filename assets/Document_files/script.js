let burgerName;
let friesName;
let sodaName;
let burgerTotal;
let friesTotal;
let sodaTotal;
let orderTotal = 0;
let deliveryConfirm = false;

 alert('Hi there! Thanks for choosing burger Mart as your preffered online ordering system. Below is our menu\n \nBurgers:\n1. Large Dusty: $3 \n2.Small Dusty: $2 \n3. Big Chief: $7\n \nFries: \n1. Small Fries $1 \n2. Medium Fries: $2 \n3. Large Fries: $4\n \nDrink: \n1. Small Drink: $1 \n2. Medium Drink: $2 \n3. Large Drink $3');

 let chosenBurger = prompt("Select your burger: \n\n1. Large Dusty: $3 \n2. Small Dusty: $2 \n3. Big Chief: $7")
 let chosenFries = prompt("Select your Fries: \n\n1. Small Fries $1 \n2. Medium Fries: $2 \n3. Large Fries: $4")
 let chosenDrink = prompt("Select your Drink: \n\n1. Small Drink: $1 \n2. Medium Drink: $2 \n3. Large Drink $3")

  function mealOrder(burger, fries, soda) {
    this.burger = burger;
    if (this.burger == 1) {
      burgerName = "Large Dusty";
      burgerTotal = 3;
    }
    else if (this.burger == 2) {
      burgerName = "Small Dusty";
      burgerTotal = 2;
    }
    else if (this.burger == 3) {
      burgerName = "Big Chief";
      burgerTotal = 7;
    }

    this.fries = fries;
    if (this.fries == 1) {
      friesName = "Small Fries";
      friesTotal = 1;
    }
    else if (this.fries == 2) {
      friesName = "Medium Fries";
      friesTotal = 2;
    }
    if (this.fries == 3) {
      friesName = "Large Fries";
      friesTotal = 4;
    }

    this.soda = soda;
    if (this.soda == 1) {
      sodaName = "small drink";
      sodaTotal = 1;
    }
    else if (this.soda == 2) {
      sodaName = "Medium drink";
      sodaTotal = 2;
    }
    else if (this.soda == 3) {
      sodaName = "Large drink";
      sodaTotal = 3;
    }

    orderTotal = calculateTotal(burgerTotal, friesTotal, sodaTotal);

    this.delivery = function() {
      let askDelivery = prompt("Would you like your meal to be delivered?");
      if (askDelivery == 'yes') {
        deliveryConfirm = true;
      }
    };

    this.displayOrder = function() {
      if (deliveryConfirm == false) {
        alert(`your order details are below: \n\n ${burgerName} $${burgerTotal} \n${friesName} $${friesTotal} \n${sodaName} $${sodaTotal} \n\n total: ${orderTotal}`);
      }
      else {
        alert(`your order details are below: \n\n ${burgerName} $${burgerTotal} \n${friesName} $${friesTotal} \n${sodaName} $${sodaTotal} \nDelivery Fee: $5 \n\n total: ${orderTotal + 5}`);
      }

    };

  }

 let newOrder = new mealOrder(chosenBurger, chosenFries, chosenDrink);
 newOrder.delivery();
 newOrder.displayOrder;

 function calculateTotal(burger, fries, soda) {
  return burger + fries + soda;
 }
