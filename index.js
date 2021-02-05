'use strict';

//Boolean variables
var isHotOutside = false;
var isWeekday = true;
var hasMoneyinPocket = true;

//Non-Boolean variables
var costOfMilk = 2;
var moneyInWallet = 100;
var thirstLevel = 3; //scaled from 1-10 

var shouldByIcecream = isHotOutside && hasMoneyinPocket;
console.log(shouldByIcecream); //fasle 

var willGoSwimming = isHotOutside && isWeekday;
console.log(willGoSwimming); //false 

var isAGoodDay = isHotOutside && hasMoneyinPocket && !isWeekday;
console.log(isAGoodDay); //false 

var willBuyMilk = isHotOutside && thirstLevel >= 3 && (moneyInWallet >= 2 * costOfMilk);
console.log(willBuyMilk); //false