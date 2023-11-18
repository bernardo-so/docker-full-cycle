const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people (name) values ('Arthur')`
connection.query(sql)

app.get('/', (req, res) => {
    const sqlSelect = "SELECT * FROM people";
    connection.query(sqlSelect, (err, results, fields) => {
        if (err) {
            res.send('Erro na consulta: ' + err);
            return;
        }

        let htmlResponse = '';
        results.forEach(person => {
            htmlResponse += `<h3>${person.name}</h3>`;
        });

        res.send(`<h1>Full Cycle Rocks!</h1>`+htmlResponse);
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})