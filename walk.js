//variables to hold user input.
var teamNameInput = document.getElementById("teamInput");
var donationAmountInput = document.getElementById("donateInput");

var table = document.getElementById("tableList");

//Button Variables and event Listeners
var clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", cleaForm);


var donateBtn = document.getElementById("donateBtn");
donateBtn.addEventListener("click", submitForm);

//Button functions (clear button)
function cleaForm (){
	teamNameInput.value = "";
	donationAmountInput.value = ""; 
}

// get data from form and add donor object to donor list array
function submitForm () {
	var teamName = teamNameInput.value;
	var donorAmount = donationAmountInput.value;
	cleaForm();

	var newDonor = {"name": teamName, 
					"donation" : donorAmount,
					}

	var tableInput = WalkAthon.getdonorArray();
	displayTable(tableInput);
}

function displayTable (){
	table.innerHTML = "";

	var tableColumnNames = document.createElement("td");
	tableColumnNames.innerHTML = 
		`<tr>
	        <th scope="col">Team Name</th>
	        <th scope="col">Pleadge</th>
    	</tr>`;
	table.insertBefore(displayTable);

	//"tbody" element to hold table 
	var tblBody = document.createElement("tbody");
	 table.appendChild(tblBody);

	//loop through the data from the form to add a new line in table.
	for (i=0; 1<teamsAdded.length; i++){
		var addDonorRow = document.createElement("td");
		addDonorRow.innerHTML = 
			`<td>${teamsAdded[i].name}</td>
			<td>${teamsAdded[i].pledge}</td>`
		tblBody.appendChild(addDonorRow);

	};
}


