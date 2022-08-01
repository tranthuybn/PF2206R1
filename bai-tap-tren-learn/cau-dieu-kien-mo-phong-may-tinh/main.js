const input = document.querySelector('#display')
const table = document.querySelector('#calc')
const displayResult = document.querySelector('.display-result')
let b = ''
let divisor = ''
let operator
let end
table.onclick = function(e){
    if(e.target.className == 'display-result'){
        calc(divisor)
    } else if(e.target.className == 'reset'){
        end = input.value.length - 1
        input.value = input.value.slice(0, end)
    } 
    else{
        getValue(e)
    }
}
function getValue(e) {
    if(e.target.localName == 'button'){
        divisor += e.target.value
        input.value = divisor
    }
}
function calc(divisor){
    let temp = '0'
    let sum = 0
    for(var i = 0 ; i < divisor.length; i++){
        let ch = divisor[i]
        if(!isNaN(String(ch) * 1)){
            temp += ch
        } else{
            switch(ch) {
                case '+' : 
                    operator = ch
                    sum += Number(temp)
                    break
                case 'x' : 
                    operator = ch
                    if(sum == 0){
                        sum = 1
                    }
                    sum = sum * Number(temp)
                    break
                case '-' : 
                    operator = ch
                    if(sum == 0){
                        sum = Number(temp)
                    } else {
                        sum -= Number(temp)
                    }
                    break
                case '/' :   
                    operator = ch
                    if(sum == 0){
                        sum = Number(temp)
                    } else {
                        sum /= Number(temp)
                    }
                    break
            }
            temp = '0'
        }
    }
    switch(operator){
        case '+': 
          return sum + Number(temp)
        case 'x': 
          return sum * Number(temp)
        case '-': 
          return sum - Number(temp)
        case '/': 
          return sum / Number(temp)
    }

}
displayResult.onclick = function(){
    input.value = calc(divisor)
}


