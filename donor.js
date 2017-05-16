// The donor information should be stored as JS objects that contain their content type as keys and the submitted information as the value. {name: "John Donut", pledge: 70}
//feeding the argument of "newDonor" to the function that is the oject being added too
var WalkAThon = (function(donor) {

    //array to add all donors to
    var donorArray = [];

    donor.addDonor = function(newDonor){
        donorArray.push(newDonor);
        console.log(donorArray);
    };

    donor.getDonor = function (newDonor){
        return donorArray;
    };

    return donor;
})(WalkAThon || {});
