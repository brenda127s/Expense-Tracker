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
    var deleteButtonCell = document.createElement('td');

    nameCell.textContent = name;
    dateCell.textContent = date;
    amountCell.textContent = amount;

    //Add to the total
    let expenses = [];
    let total = 0;
    const totalCell = document.getElementById('total');
   
    total += amount;
    totalCell.textContent = total;
    

    //Create delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function() {
        // Remove the row when delete button is clicked
        newRow.remove();
        let expenses = [];
        total -= expenses.amount
        totalCell.textContent = total;
        
    });
    deleteButtonCell.appendChild(deleteButton);

    newRow.appendChild(nameCell);
    newRow.appendChild(dateCell);
    newRow.appendChild(amountCell);
    newRow.appendChild(deleteButtonCell);

    //Add the new row to the table body 
    var tableBody = document.querySelector('table tbody');
    tableBody.appendChild(newRow);

    

    //Clear input fields
    document.getElementById('name').value = "";
    document.getElementById('date').value = "";
    document.getElementById('amount').value = "";

    
    }

    