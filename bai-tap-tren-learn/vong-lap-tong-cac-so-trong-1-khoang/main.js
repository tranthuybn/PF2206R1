let a, b
do{
    a = Number(prompt('Nhập 1 khoảng từ a-b. Trong đó a = '))
}while(!Number.isInteger(a))
do{
    b = Number(prompt('Nhập 1 khoảng từ a-b. Trong đó b = '))
}while(!Number.isInteger(b))

let sum = a
do{
    sum += ++a
} while(a < b)
document.write(sum)
