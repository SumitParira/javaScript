const accountId = 144553
let accountEmail = "sp@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "2121212"
acountCity = "Bengaluru"

console.log(accountId);
console.log(accountCity);

console.table([accountId , accountEmail , accountPassword ,accountCity,accountState]);

/*
prefer not to use var because of issue in block and functional scope
*/