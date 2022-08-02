let table = '<table>'
for(let i = 1; i <= 9;i++){
    table += '<tr>'
    for(let j = 2; j <= 9; j++){
        table += `<td> ${j}x${i}=${i * j} </td>`
    }
    table += '</tr>'
}
table += '</table>'
document.write(table)