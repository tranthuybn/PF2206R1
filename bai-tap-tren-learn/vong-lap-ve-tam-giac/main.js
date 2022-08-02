let result1 = ''
for(let i = 0; i < 5; i++){
    result1 += '*'
    document.write(result1 + '<br>')
}
document.write('<br>')

// =========================
let result2 = '******'
for(let i = 0; i < 5; i++){
    result2 = result2.slice(0,-1)
    document.write(result2 + '<br>')
}


// =========================
let result3 = ''
let p1 = ''
const para1 = document.getElementById('para-1')
for(let i = 0; i < 5; i++){
    result3 += '*'
    p1 += result3 + '<br>'
}
para1.innerHTML = p1 

// =========================
let result4 = '******'
let p2 = ''
const para2 = document.getElementById('para-2')
for(let i = 0; i < 5; i++){
    result4 = result4.slice(0,-1)
    p2 += result4 + '<br>'
}
para2.innerHTML = p2


