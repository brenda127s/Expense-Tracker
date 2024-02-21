function addExpense() {
    // Retrieve input field values
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var amount = document.getElementById('amount').value;
    // Create a new row in the table
    var newRow = document.createElement('tr');
    // Create and populate cells
    var nameCell = document.createElement('td');
    var dateCell = document.createElement('td');
    var amountCell = document.createElement('td');

    nameCell.textContent = name;
    dateCell.textContent = date;
    amountCell.textContent = amount;

    newRow.appendChild(nameCell);
    newRow.appendChild(dateCell);
    newRow.appendChild(amountCell);
    //Add the new row to the table body 
    var tableBody = document.querySelector('table tbody');
    tableBody.appendChild(newRow);
    //Clear input fields
    document.getElementById('name') = '';
    document.getElementById('date') = '';
    document.getElementById('amount') = '';


    }
    





// document.getElementById("addExpense").addEventListener("click", function() {
// if (name && !isNaN(date) && !isNaN(amount)) {
//     const newRow = document.createElement("tr");
//     newRow.innerHTML = `
//     <td>${name}</td>
//     <td>$${date.toFixed(2)}</td>
//     <td>$${amount.toFixed(2)}</td>
//     <td><button class="deleteBtn">Delete</button></td>
//     `;

//     document.querySelector("#expensesTable tbody").appendChild(newRow);
// }



// });