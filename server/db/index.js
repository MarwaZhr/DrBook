const mysql = require('mysql');
const createTables = require('./config');
const Promise = require('bluebird');
const database = 'books';
const data = require('../../client/public/dummyData/dummyData.js');

const connection = mysql.createConnection({
  user: 'root',
  password: 'password'
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to ${database} database as ID ${db.threadId}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db))
  .then(()=> db.connect((err) => {
    data.map((element) => {
      var sql = 'INSERT INTO bookListe (title, author, image, description, price, quantitie,inCart,purchase, total, genre) values (?,?,?,?,?,?,?,?,?,?)';
      var value = [element.title, element.author, element.image, element.description, element.price, element.quantitie, false, 0, 0, element.genre];
      db.query(sql, value, (err, result) => {
        if (err) { console.log(err); }
        { console.log('added'); }
      });
    });
  }));

module.exports = db;