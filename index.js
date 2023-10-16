function addCar(){
    // value from the form 
    let make = document.getElementById("make").value;
    let model = document.getElementById("model").value;
    let year = document.getElementById("year").value;
    // Create a new row for the table
    let table = document.querySelector("table tbody");
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    cell1.innerHTML = make;
    cell2.innerHTML = model;
    cell3.innerHTML = year;
    // Clear the form after adding 
    document.getElementById("carForm").reset();


}