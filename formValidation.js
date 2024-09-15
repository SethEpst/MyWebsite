var check = 0;

function validation() {
    //Call all Variables
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var bday = document.getElementById("date").valueAsDate;
    var message = document.getElementById("message").value;
    var confirm = document.getElementById("confirm").value;
    var demo = document.getElementById("demo");
    const today = Date.now();

    
    //Testing purposes
    demo.innerHTML = "First Name = " + fname + "<br>Last Name = " + lname + "<br>Address = "
        + address + "<br>City = " + city + "<br>State = " + state + "<br>Zip = " + zip 
        + "<br>Phone = " + phone + "<br>Email = " + email
        + "<br>Birth Date = " + bday.toUTCString() + "<br>Message = " + message;

    //Begin Validating

    if (fname == "" || lname == "") {
        alert("Please enter your full name");
        preventDefault();
        return false;
    }

    if (numCheck(fname) == true || numCheck(lname) == true) {
        alert("Your name cannot contain numbers");
        return false;
    }

    if (address == "") {
        alert("Please enter your mailing address");
        return false;
    }

    const addressSplit = address.split(' ')
    if (isNaN(addressSplit[0])) {
        alert("Please enter a valid address Fail on isNaN");
        return false;
    }

    if (addressSplit.length < 3) {
        alert("Please enter a valid address Fail on length");
        return false;
    }

    if (city == "") {
        alert("Please enter a city");
        return false;
    }

    if (numCheck(city) == true){
        alert("City name cannot contain numbers");
        return false;
    }

    if (state == "") {
        alert("Please select a state");
        return false;
    }

    if (zip == "") {
        alert("Please enter your zip code");
        return false;
    }

    if (isNaN(zip) || zip.length != 5) {
        alert("Please enter a valid zip code");
        return false;
    }

    if (email == "") {
        alert("Please enter your email addresss");
        return false;
    }
    
    if (/\S+@\S+\.\S+/.test(email) != true) {
        alert("Please enter a valid email address");
        return false;
    }
    
    if (bday == "" || bday == null) {
        alert("Please enter your birth date");
        return false;
    }
    
    if (today < bday) {
        alert("Your birth date can't be in the future");
        return false;
    }
    
    if (confirm == "") {
        alert("Please answer the confirmation question");
        return false;
    }

    if (confirm != 9) {
        alert("Check your math");
        return false;
    }
    
    if (check != 1) {
        alert("Double check your inputs and then hit submit one more time to confirm them")
        check = 1;
        return false;
    }

}
function numCheck(x) {
    var matches = x.match(/\d+/g);
    if (matches != null) {
        return true;
    }
}

$(document).ready(function(){
    $('#phone').inputmask('(999)-999-9999',{placeholder:'(XXX)-XXX-XXXX'})
    $('#zip').inputmask('99999',{placeholder:'XXXXX'})
});

//document.getElementById(myForm).addEventListener("submit",function(event){if(validation() === false){event.preventDefault();}},false);