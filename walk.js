//variables to hold user input.
var teamNameInput = document.getElementById("teamInput");
var donationAmountInput = document.getElementById("donationAmount");
var form = document.getElementById("signUpForm");
var radios = document.getElementsByClassName("radioBtn");


var donateBtn = document.getElementById("donateBtn");
donateBtn.addEventListener("click", submitForm);

var clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", clearForm);

var table = document.getElementById("donorTable");

function clearForm (){
	teamNameInput.value = "";
	donationAmountInput.value = "";
	radios.value = "";
}

// get data from form and add donor object to donor list array
function submitForm () {
	var teamName = teamNameInput.value;
	var donorAmount = donationAmountInput.value;
	var donationType = radios;
	// if (lumpSum.checked === true){
	
	// } else if (laps.checked === true) {

	// } else {
	// 	alert("Please check a doantion amount");
	// }
	clearForm();

	var newDonor = {"name": teamName, 
					"donation" : donorAmount,
					"pledge_type": donationType
					}
	WalkAThon.addDonor(newDonor);

	var tableInput = WalkAThon.getdonorArray();
	displayTable(tableInput);
}
console.log(WalkAThon);

function displayTable (list){
	console.log("list", list.length);
	table.innerHTML = "";

	var tableColumnNames = document.createElement("td");
	tableColumnNames.innerHTML = 
		`<tr>
	        <th scope="col">Team Name</th>
	        <th scope="col">Pledge</th>
	        <th scope="col">Pledge Type</th>
    	</tr>`;
	table.appendChild(tableColumnNames);

	//"tbody" element to hold table 
	var tblBody = document.createElement("tbody");
	 table.appendChild(tblBody);

	//loop through the data from the form to add a new line in table.
	for (i=0; 1<teamsAdded.length; i++){
		var addDonorRow = document.createElement("td");
		addDonorRow.innerHTML = 
			`<td>${teamsAdded[i].name}</td>
			<td>${teamsAdded[i].pledge}</td>
			<td>${teamsAdded[i].pledge_type}</td>`
		tblBody.appendChild(addDonorRow);

	};
}
