// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(){
    var upperCaseName = customerName.toUpperCase();
    return upperCaseName;
}

var bestCustomer = 'maybe  bob';

function setBestCustomer(){
    var bestCustomer = 'maybe bob';
}
setBestCustomer();


var bestCustomer = 'not bob';

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
overwriteBestCustomer();

const leastFavoriteCustomer = 'John';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Alice';
}