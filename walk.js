//variables to hold user input.
var teamNameInput = document.getElementById("teamInput");
var donationAmountInput = document.getElementById("donationAmount");
var form = document.getElementById("signUpForm");
var radios = document.getElementsByClassName("radioBtn");
var lumpSum = document.getElementById("donateLumpSum");
var laps	= document.getElementById("donatePerLap");
var radioChosen;

var donateBtn = document.getElementById("donateBtn");
donateBtn.addEventListener("click", submitForm);

var clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", clearForm);

var table = document.getElementById("donorTable");

function clearForm (){
	teamNameInput.value = "";
	donationAmountInput.value = "";
	// radios.value = "unchecked";
}

// get data from form and add donor object to donor list array
function submitForm () {
	var teamName = teamNameInput.value;
	var donorAmount = donationAmountInput.value;
	
	if (lumpSum.checked === true){
		var newDonor = {"name": teamName, 
					"donation" : donorAmount,
					"pledge_type": "lump sum"
					}
		WalkAThon.addDonor(newDonor);
		displayTable();
	} else if (laps.checked === true) {
		var newDonor = {"name": teamName, 
					"donation" : donorAmount,
					"pledge_type": "per lap"
					}
		WalkAThon.addDonor(newDonor);
		displayTable();
	} else {
		alert("Please check a donation type");
	}
}


function displayTable (){
	table.innerHTML = "";
	clearForm();

	var tableColumnNames = document.createElement("tr");
	tableColumnNames.innerHTML = 
		`<th scope="col">Name </th>` + 
	    `<th scope="col">Pledge Amount </th>` +
	   	`<th scope="col">Pledge Type </th>`;
	table.appendChild(tableColumnNames);
	
	var tableInput = WalkAThon.getDonor();
	for (var i=0; i<tableInput.length; i++){
		var addDonorRow = document.createElement("tr");
		addDonorRow.innerHTML = 
			`<td>${tableInput[i].name}</td>
			<td>${tableInput[i].donation}</td>
			<td>${tableInput[i].pledge_type}</td>`
		table.appendChild(addDonorRow);
	}

};
