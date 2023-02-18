const users = [
    {
      "_id": "5d220b10e8265cc978e2586b",
      "isActive": true,
      "balance": 2853.33,
      "age": 20,
      "name": "Buckner Osborne",
      "gender": "male",
      "company": "EMPIRICA",
      "email": "bucknerosborne@empirica.com",
      "phone": "+1 (850) 411-2997",
      "registered": "2018-08-13T04:28:45 -03:00",
          "nestedField": { total: 300 }
    },
    {
      "_id": "5d220b10144ef972f6c2b332",
      "isActive": true,
      "balance": 1464.63,
      "age": 38,
      "name": "Rosalie Smith",
      "gender": "female",
      "company": "KATAKANA",
      "email": "rosaliesmith@katakana.com",
      "phone": "+1 (943) 463-2496",
      "registered": "2016-12-09T05:15:34 -02:00",
          "nestedField": { total: 400 }
    },
    {
      "_id": "5d220b1083a0494655cdecf6",
      "isActive": false,
      "balance": 2823.39,
      "age": 40,
      "name": "Estrada Davenport",
      "gender": "male",
      "company": "EBIDCO",
      "email": "estradadavenport@ebidco.com",
      "phone": "+1 (890) 461-2088",
      "registered": "2016-03-04T03:36:38 -02:00",
      "nestedField": { total: 200 }
    }
];

const tableSchema = {
    index: '#',
    name: 'Name',
    email: 'Email',
    balance: 'Balance',   
};

function generateThead(obj){
    const thead = document.createElement('thead')
    const tr = generateTr(obj, 'th')
    thead.appendChild(tr)
    return thead;
}

function generateTr(obj, tagName = 'td'){
    const tr = document.createElement('tr')
    Object.values(obj).forEach(val => {
        const td = document.createElement(tagName);
        td.textContent = val
        tr.appendChild(td)
    })
    return tr
}
function generateTable(){ 
    const table = document.createElement('table');
    table.classList.add('table');
    return table;
}
function generateTbody(tableSchema, items) {
    const tbody = document.createElement('tbody');
    items.forEach((item, index) => {
        item.index = index + 1;
        //console.log(item)
        const itemSchema = generateItemsSchema(tableSchema, item);
        const tr = generateTr(itemSchema, 'td');
        tbody.appendChild(tr);
    });

    return tbody;
}

function generateItemsSchema(tableSchema, item) {
    const itemSchema = Object.keys(tableSchema).reduce((acc, key) => {
        if (key in item) {
            acc[key] = item[key];
        } 
        //console.log(acc)
        return acc;
    }, {});
    console.log(itemSchema)

    return itemSchema;
}
document.gete
function generateTotalBal(obj,arr){
 const total = arr.reduce((acc,val) => acc + parseFloat(val.balance),0);
 const tr = document.createElement('tr');
 const td = document.createElement('td');
 const keysLength = Object.keys(obj).length;

 td.insertAdjacentHTML("beforeend", `Total Balance: <b>${total}</b>`)
 td.setAttribute('colspan', keysLength);
 td.setAttribute('align', 'right')
 
 tr.appendChild(td);

 return tr
}

function inItItems(tableSchema,items){
    const container = document.querySelector('.table-container');
    const table = generateTable();
    const tBody = generateTbody(tableSchema,items);
    const tHead = generateThead(tableSchema);
    const totalBalance = generateTotalBal(tableSchema,items)
    table.appendChild(tHead);
    table.appendChild(tBody);
    table.appendChild(totalBalance);

    container.appendChild(table)

}
inItItems(tableSchema,users)