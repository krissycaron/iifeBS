//variables to hold user input.
var teamNameInput = document.getElementById("teamInput");
var donationAmountInput = document.getElementById("donateInput");

var table = document.getElementById("tableList");

//Button Variables and event Listeners
var clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", cleaForm);

// var donateBtn = document.getElementById("donateBtn");
// donateBtn.addEventListener("click", submitForm);

//Button functions (clear button)
function cleaForm (){
	teamNameInput.value = "";
	donationAmountInput.value = ""; 
}

// get data from form and add donor object to donor list array
// function submitForm () {
// 	var teamName = teamNameInput.value;
// 	var donorAmount = donationAmountInput.value;
// 	cleaForm();

// 	var newDonor = {"name": teamName, 
// 					"donation" : donorAmount,
// 					}

// 	var tableInput = WalkAthon.getdonorArray();
// 	displayTable();
// }

function displayTable (){
	table.innerHTML = "";

	var tableColumnNames = document.createElement("td");
	tableColumnNames.innerHTML = 
		`<tr>
	        <th scope="col">Team Name</th>
	        <th scope="col">Pleadge</th>
    	</tr>`;
	table.insertBefore(displayTable);



}


// submitForm();
displayTable();



