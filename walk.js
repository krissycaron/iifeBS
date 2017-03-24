//variables to hold user input.
var teamNameInput = document.getElementById("teamInput");
var donationAmountInput = document.getElementById("donateInput");

//Button Variables and event  Listeners
var clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", cleaForm);
// console.log(clearBtn);

var donateBtn = document.getElementById("donateBtn");
donateBtn.addEventListener("click", submitForm);

function cleaForm (){
	teamNameInput.value = "";
	donationAmountInput.value = ""; 
}

// get data from form and add donor object to donor list array
function submitForm () {
	var teamName = teamNameInput.value;
	var donorAmount = donationAmountInput.value;

	var newDonor = {"name": teamName, 
					"donation" : donorAmount,
					}
}

// var WalkAThon = (function () {


// });