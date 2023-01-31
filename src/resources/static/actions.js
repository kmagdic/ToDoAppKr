function addRecordToTable(){

        var table = document.getElementById("todoTable");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");

        var row= document.createElement("tr");

        td1.innerHTML = document.getElementById("todo").value;
        td2.innerHTML  = document.getElementById("note").value;
        td3.innerHTML  = document.getElementById("deadline").value;
        td4.innerHTML = document.getElementById("delete").value;

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);

        table.appendChild(row);

        /*var table = document.getElementById("todoTable");
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell2 = row.insertCell(2);

        td1.innerHTML = document.getElementById("todo").value;
        td2.innerHTML  = document.getElementById("note").value;
        td3.innerHTML  = document.getElementById("deadline").value;

        row.appendChild(td1);
        row.appendChild(td2);
        roe.appendChild(td3);*/
   }

   function deleteRow(r) {
     var i = r.parentNode.parentNode.rowIndex;
     document.getElementById("todoTable").deleteRow(i);
   }