// 1108. Defanging an IP Address (easy)
var defangIPaddr = function(address) {
    let newAddy = address.split('')
    let newArr = []
    for(let i=0; i<newAddy.length; i++){
        address[i] === '.' ? newArr.push('[.]') : newArr.push(address[i])
    }
    return newArr.join('')
}


// 1480. Running Sum of 1d Array (easy)
var defangIPaddr = function(address) {
    let newAddy = address.split('')
    let newArr = []
    for(let i=0; i<newAddy.length; i++){
        address[i] === '.' ? newArr.push('[.]') : newArr.push(address[i])
    }
    return newArr.join('')
}

// 1431. Kids With the Greatest Number of Candies (easy)
var kidsWithCandies = function(candies, extraCandies) {
    let newArr = []
    let maxCandies = Math.max(...candies)
    for (let i=0; i<candies.length; i++){
        newArr.push((candies[i]+extraCandies) >= maxCandies )
    }
    return newArr
}
