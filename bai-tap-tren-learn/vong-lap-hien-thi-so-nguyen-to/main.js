let numbers = 20 
let count = 0
let N = 2
let arr = []
while(count < numbers){
    if(N % 2 == 1){
        arr.push(N)
        count++
    }
    N++
}
document.write(arr)