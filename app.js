const http = require('http');
const os = require('os');

let username = os.userInfo().username;
const server = http.createServer((req, res) => {

    // Устанавливаем статус и заголовки
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    
    // Отправляем ответ
    res.end(`Привет ${username}, это сервер на Node.js!`);
});

const PORT = 3000;
const HOST = '127.0.0.1'; // localhost

server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен на http://${HOST}:${PORT}`);
});