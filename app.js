const http = require('http');


const moduleSin = require('./sin');

const moduleGreeting = require('./greeting');

const moduleUser = require('./user');
var moduleUser2 = require('./user');

const moduleWelcome = require('./welcome');

console.log(moduleWelcome.getMorningMessage());
console.log(moduleWelcome.getEveningMessage());

global.console.log("Глобальные переменные date и username", global.date, global.username);

const server = http.createServer((req, res) => {

    // Устанавливаем статус и заголовки
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    
    // Отправляем ответ
    res.end(`Дата запроса: ${moduleGreeting.Date}
    ${moduleGreeting.getMessage(moduleUser.username)}
    Синус 15 = ${moduleSin(15)}
    *теперь имя мользователя 2 - ${moduleUser2.username = 'Петя'}* ((задание с кэшинрованием имени))
    Имя пользователя2: ${moduleUser2.username} ((задание с кэшинрованием имени))
    Имя пользователя: ${moduleUser.username} ((задание с кэшинрованием имени))`);
});

var moduleUser2 = require('./user');


const PORT = 3000;
const HOST = '127.0.0.1'; // localhost

server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен на http://${HOST}:${PORT}`);
});