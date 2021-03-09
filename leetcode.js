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



// 1470. Shuffle the Array (easy)
var shuffle = function(nums, n) {
    let newArr = []
    for (let i=0; i<(nums.length/2); i++){
        newArr.push(nums[i], nums[i+n])
    }
    return newArr
}



// 1672. Richest Customer Wealth (easy)
var maximumWealth = function(accounts) {
    let newArr = []
    for(let i=0; i<accounts.length; i++){
        newArr.push(accounts[i].reduce((a,b)=>a+b))
        }
     return Math.max(...newArr)
}


// 1512. Number of Good Pairs
var numIdenticalPairs = function(nums) { 
    let sum = 0 
    for (let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++){
            nums[i] === nums[j] ? sum++ : null
        } 
    } 
    return sum
}
