function tabuada(){
    let num = document.getElementById('nmr')
    let tab = document.getElementById('tab')
    if (num.value.length == 0) {
        window.alert('Digite algum número')
    } else{
        let n = Number(num.value)
        let c = 0
        tab.innerText =  ''
        while (c<=10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}