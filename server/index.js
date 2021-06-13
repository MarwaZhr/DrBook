const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;
const path = require ('path');

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

//For rendring all the books in the store
app.get('/getBooks', (req, res) => {
  db.query('SELECT * FROM bookListe', (err, result)=> {
    if (err) { throw err; }
    res.status(200).json(result);
  });
});

//To update the inCart value: to know what to add in the cart componenet
app.patch('/updateCart:id', (req, res) => {
  const query = 'UPDATE bookListe SET inCart = !inCart WHERE id = ?';
  const params = req.params.id;
  db.query(query, params, (err, result) => {
    if (err) { throw err; }
    db.query('SELECT * FROM booksListe', (err, result)=> {
      res.status(201).json(result);
    });
  });
});

// to render the element added to the cart in the cart componenet
app.get('/added', (req, res) => {
  console.log(req.body);
  db.query('SELECT id, title, image, price, purchase, total FROM bookListe WHERE inCart=1', (err, result) => {
    res.status(200).json(result);
  });
});

//get rhe info for one Book 
app.get('/bookInfo:id', (req, res) => {
  let id = req.params.id;
  db.query(`SELECT * FROM bookListe WHERE id = ${id}`, (err, result)=> {
    if (err) { throw err; }
    res.status(200).json(result);
  });
});


app.get('*', (req, res) => { 
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});