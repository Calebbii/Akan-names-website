function output() {


    
    var gender = document.getElementById("gender").value;
    var yy = document.getElementById("year").value;
    var mm = document.getElementById("month").value;
    var dd = document.getElementById("day").value;
    var cc = (yy - 1) / 100 + 1;
    var result = parseInt(((cc / 4) - 2 * cc - 1)+ ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Yaw","Kwame"];
    var femaleNames = ["Kwame","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log(result);
    if (document.getElementById("gender").checked) {
        var gender = "male";
    }
    else {
        var gender ="female";
    }
    if (dd < 1 || dd > 31) {
        alert("Invalid Date");
    }
    else if (mm <= 0 || mm > 12) {
        alert("Invalid Month");
    }
    else if (result == 0 && gender === "male") {
        document.getElementById("display").innerHTML =
        ("Born on a " + days[0] + ", Akan name is " + maleNames[0]);
    }
    else if (result == 1 && gender === "male") {
        document.getElementById("display").innerHTML =
        ("Born on a " + days[1] + ", Akan name is " + maleNames[1]);
    }
    else if (result == 2 && gender === "male") {
        document.getElementById("display").innerHTML =
        ("Born on a " + days[2] + ", Akan name is " + maleNames[2]);
    }
    else if (result == 3 && gender === "male") {
        document.getElementById("display").innerHTML =
        ("Born on a " + days[3] + ", Akan name is " + maleNames[3]);
    }
    else if (result == 4 && gender === "male") {
        document.getElementById("display").innerHTML =
        ("Born on a " + days[4] + ", Akan name is " + maleNames[4]);
    }
    else if (result == 5 && gender === "male") {
        document.getElementById("display").innerHTML =
        ("Born on a " + days[5] + ", Akan name is " + maleNames[5]);
    }
    else if (result == 6 && gender === "male") {
        document.getElementById("display").innerHTML =
        ("Born on a " + days[6] + ", Akan name is " + maleNames[6]);
    }
    else if (result == 0 && gender === "female") {
        document.getElementById("display").innerHTML =
        ("Born on a " + days[0] + ", Akan name is " + femaleNames[0]);
    }
    else if (result == 1 && gender === "female") {
        document.getElementById("display").innerHTML =
        ("Born on a " + days[1] + ", Akan name is " + femaleNames[1]);
    }
    else if (result == 2 && gender === "female") {
        document.getElementById("display").innerHTML =
        ("Born on a " + days[2] + ", Akan name is " + femaleNames[2]);
    }
    else if (result == 3 && gender === "female") {
        document.getElementById("display").innerHTML =
        ("Born on a " + days[3] + ", Akan name is " + femaleNames[3]);
    }
    else if (result == 4 && gender === "female") {
        document.getElementById("display").innerHTML =
        ("Born on a " + days[4] + ", Akan name is " + femaleNames[4]);
    }
    else if (result == 5 && gender === "female") {
        document.getElementById("display").innerHTML =
        ("Born on a " + days[5] + ", Akan name is " + femaleNames[5]);
    }
    else if (result == 6 && gender === "female") {
        document.getElementById("display").innerHTML =
        ("Born on a " + days[6] + ", Akan name is " + femaleNames[6]);
    }
    else {
        alert("Enter your information!")
    }
}
