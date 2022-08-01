let num
do{
    num = Number(prompt('Nhập vào 1 số nguyên dương'))
} while(!Number.isInteger(num) || num < 0)

// Cách 1 dùng String
// let result = ''
// let numString = num.toString()
// for(let i = 0; i < numString.length; i++){
//     let surplus = num % 10
//     result += surplus
//     num = Math.floor(num / 10)
// }
// document.write(Number(result))

// Cách 2 dùng Array
let numArr = num.toString().split('')
let result = ''
let numArrLength = numArr.length
for(let i = 0; i < numArrLength; i++){
    result += numArr.pop()
}
document.write(Number(result))