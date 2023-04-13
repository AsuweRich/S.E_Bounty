interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const [student1, student2] = [
    {
        firstName: "Gon",
        lastName: "Freecs",
        age: 12,
        location: "New-York"
    },
    {
        firstName: "Suzan",
        lastName: "Storm",
        age: 30,
        location: "Amsterdam"
    }
]

const studentsList : Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table : HTMLTableElement = document.createElement("table");
const thead : HTMLTableSectionElement = document.createElement("thead");
const tbody : HTMLTableSectionElement = document.createElement("tbody");
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const firstCellHead : HTMLTableCellElement = rowHead.insertCell(0);
const secondCellHead: HTMLTableCellElement = rowHead.insertCell(1);

firstCellHead.innerHTML = "firstName";
secondCellHead.innerHTML = "location";
table.append(thead);


studentsList.forEach(student => {
    const row : HTMLTableRowElement = tbody.insertRow(0);
    const firstCell : HTMLTableCellElement = row.insertCell(0);
    const secondCell : HTMLTableCellElement = row.insertCell(1);

    firstCell.innerHTML = student.firstName;
    secondCell.innerHTML = student.location;
});

table.append(tbody);
body.append(table);
