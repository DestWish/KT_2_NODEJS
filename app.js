const http = require('http');


const moduleSin = require('./sin');

const moduleGreeting = require('./greeting');

const moduleUser = require('./user');

const server = http.createServer((req, res) => {

    // Устанавливаем статус и заголовки
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    
    // Отправляем ответ
    res.end(`Дата запроса: ${moduleGreeting.Date}
    ${moduleGreeting.getMessage(moduleUser.username)}
    Синус 15 = ${moduleSin(15)}`);
});

const PORT = 3000;
const HOST = '127.0.0.1'; // localhost

server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен на http://${HOST}:${PORT}`);
});