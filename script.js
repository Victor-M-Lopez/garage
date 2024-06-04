// user input variables
let entertainer = document.querySelector(".input-box--entertainer");
let numTickets = document.querySelector(".input-box--tickets");
let ticketType = document.querySelector(".input-box--type");

// submit button
let submitBtn = document.getElementById("btn");

// receipt text
let receiptEntertainer = document.querySelector(".receipt_text--entertainer");
let receiptNumTickets = document.querySelector(".receipt_text--tickets");
let receiptTicketType = document.querySelector(".receipt_text--type");
let receiptTicketPrice = document.querySelector(".receipt_text--price");
let receiptTicketTotal = document.querySelector(".receipt_text--total");

submitBtn.onclick = function() {
	receiptEntertainer.innerText = `Entertainer: ${entertainer.value}`;

	receiptNumTickets.innerText = `# of tickets: ${numTickets.value}`; 
}

