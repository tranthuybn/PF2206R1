const btn = document.getElementById('btn')
btn.onclick = function() {
    num = Number(prompt('Số trúng giải nằm trong khoảng từ 0 - n. Nhập số vào số n bạn muốn'))
    let numSuccess = Math.floor(Math.random() * num)
    let numChoice
    for(let i = 0; i < 2; i++){
        numChoice = prompt('Bạn đoán số trúng giải là:')
        if(numChoice == numSuccess){
            alert('Congratulations!')
            break
        } else{
            alert('Mời nhập lại')
        }
    }
    if(numChoice != numSuccess){
        alert('Thua cuộc')
    }
}
