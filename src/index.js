class dataFaker {
    constructor() {
        this.data = [];
    }
    fake(amountOfData) {
        for (let i = 0; i <= amountOfData; i++) {
            let info = faker.helpers.createCard();
            let {name, email, address:{city, country, zipcode}} = info;
            this.data.push(name);
        }
    }
}

function order(data, dataLength) {
    let table = document.querySelector("tbody")
    for (let i = dataLength; i > 0; i--) {
        let row = table.insertRow(0);
        let id = row.insertCell(0);
        let name = row.insertCell(1);
        id.innerHTML = i;
        name.innerHTML = data[i];
    }
}

let fakedData = new dataFaker();
fakedData.fake(100)
console.log(fakedData.data)

order(fakedData.data, fakedData.data.length);