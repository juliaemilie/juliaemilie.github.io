fetch("../src/emissions.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (companies) {
        let table = document.getElementById("emissions-table-body");
        let tableValues = "";
        for (let company of companies) {
            tableValues += "<tr><td>" + company.name + "</td><td>" + company.country + "</td><td>" + parseFloat(company.emissions).toFixed(3) + "</td></tr>";
            console.log(company.name);
            //tableValues += "<tr><td>" + company.name + "</td><td>" + company.country + "</td><td>" + company.emissions + "</td></tr>";
        }
        table.innerHTML = tableValues;
    })