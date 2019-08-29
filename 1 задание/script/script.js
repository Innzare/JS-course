let money = prompt('Ваш бюджет на месяц?','');
let time = prompt('"Введите дату в формате YYYY-MM-DD','');

let ask1 = prompt('Введите обязательную статью расходов в этом месяце','');
let ask2 = prompt('Во сколько обойдется?','');

let appData = {
    money,
    timeData: time,
    expenses: {
        ask1: ask2,
    },
    optionalExpenses: {

    },
    income: [],
    savings: false,
}