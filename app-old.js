const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
                name: 'ppitus',
                age: 32,
                url: req.url
            }
            //res.write('Hola mundo');
        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8081);

console.log('listening 8081 port...');