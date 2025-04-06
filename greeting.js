let currentDate = new Date();
module.exports.Date = currentDate;
global.date = currentDate;

module.exports.getMessage = function(name) {
    let hours = currentDate.getHours();
    
    if (hours > 16) 
        return `Добрый вечер, ${name}`;
    else if (hours > 10) 
        return `Добрый день, ${name}`;
    else if (hours > 5) 
        return `Доброе утро, ${name}`;
    else 
        return `Доброй ночи, ${name}`;
}