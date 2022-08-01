let table = "<table>"
for(let i = 1; i <= 10; i++){
    table +=  '<tr>'
    for(let j = 1; j <= 10; j++){
        table += `<td> ${i * j} </td>`
    }
    table += `</tr>`
}
table += "</table>"
document.getElementById('table').innerHTML =  table