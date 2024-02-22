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

    //Create delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function() {
        // Remove the row when delete button is clicked
        newRow.remove();
        updateTotal();
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

    updateTotal();
    }

    function updateTotal() {
        var total = 0;
        var table = document.getElementById('expensesTable');
        var rows = table.getElementsByTagName('tr');

        // Start index from 1 to skip header row
        for (var i = 1; i < rows.length; i++) {
            var row = rows[i];
            var amountCell = row.getElementsByTagName('td')[2];
            var amount = parseFloat(amountCell.textContent);
            total += amount;
        }
        document.getElementById('total').textContent = total.toFixed(2);
    }
