let n = prompt('Nhập n số trong dãy số Fibonacci')

//Cách 1 Dùng array

// let arr = []
// for(let i = 1; i <=n; i++){
//     if(i == 1 || i == 2){
//         arr.push(1)
//     }
//     if(i > 2) {
//         let sum = arr[i - 2] + arr[i - 3]
//         arr.push(sum)
//     }
// }
// document.write(arr)



// Cách 2 Dùng string

let string = ''
for(let i = 1; i <=n; i++){
    if(i == 1 || i == 2){
        string += '1'
    }
    if(i > 2){
        let sum = Number(string[i - 2]) + Number(string[i - 3])
        string += sum
    }
    console.log(string)
}
document.write(string.split(''))