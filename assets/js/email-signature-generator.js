function generatees() {
    event.preventDefault();
    document.getElementById("fillName").innerHTML = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    document.getElementById("fillPosition").innerHTML = document.getElementById("position").value;
    document.getElementById("fillNumber").innerHTML = document.getElementById("number").value;
    document.getElementById("fillLinkedin").href = document.getElementById("linkedinURL").value;
    document.getElementById("fillLinkedin").innerHTML = document.getElementById("linkedinUsername").value;
}
