'use strict';
let money = prompt('Ваш месячный доход?');
let income = "freelance";
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'); 
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 10000; 
let period = 12;
let accumulatedMonth;
let budgetDay;

let showTypeOf = function(data) {
  console.log(typeof (data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
getExpensesMonth();

// console.log("Период равен "+period+" месяцев, "+"Цель заработать "+ mission +" долларов");
addExpenses.toLowerCase();
let arr = addExpenses.split(',')
console.log(addExpenses);
getTargetMonth();
// console.log(budgetDay);
// console.log(getStatusIncome());

let expenses1 = prompt('Введите 1-ю обязательную статью расходов?');
let amount1 = prompt(`Во сколько ${expenses1} обойдется??`);
let expenses2 = prompt('Введите 2-ю обязательную статью расходов?');
let amount2 = prompt(`Во сколько ${expenses2} обойдется??`);


function getExpensesMonth (amount1, amount2) {
  return amount1+amount2;
};

function getTargetMonth(mission, accumulatedMonth) {
  return Math.ceil(mission/accumulatedMonth);
}
// console.log(getTargetMonth());

function getAccumulatedMonth (money, getExpensesMonth) {
  return money-getExpensesMonth;
};
// getAccumulatedMonth();
console.log("Месячный бюджет составляет: "+getAccumulatedMonth+");
accumulatedMonth = getAccumulatedMonth();
budgetDay = accumulatedMonth/30;
// console.log("Месячный бюджет составляет: "+budgetMonth+");
console.log("Дневной бюджет составляет: "+budgetDay);

let getStatusIncome = function(){
  if(budgetDay>=1200){
    return('У вас высокий уровень дохода');
  }else if(budgetDay<=1200 && budgetDay>=600){
    return('У вас средний уровень дохода');
  }else if(budgetDay<=600 && budgetDay>=0){
    return('К сожалению у вас уровень дохода ниже среднего');
  }else {
    return('Что то пошло не так');
  }
};

console.log(budgetDay);
console.log(getStatusIncome());





