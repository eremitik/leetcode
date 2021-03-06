// 1108. Defanging an IP Address
var defangIPaddr = function(address) {
    let newAddy = address.split('')
    let newArr = []
    for(let i=0; i<newAddy.length; i++){
        address[i] === '.' ? newArr.push('[.]') : newArr.push(address[i])
    }
    return newArr.join('')
}


// 1480. Running Sum of 1d Array
var defangIPaddr = function(address) {
    let newAddy = address.split('')
    let newArr = []
    for(let i=0; i<newAddy.length; i++){
        address[i] === '.' ? newArr.push('[.]') : newArr.push(address[i])
    }
    return newArr.join('')
}
