const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;
const path = require ('path');
// const stripe = require ('stripe')('sk_test_51J1vqqIjewuKal2UQMO2GnNXUHsOpis3y9RzdOsonFTpOaZ8KSR6Sfwysof7IqAMvd6xI1XdKgYOLI3ppoM9lqt300HHdrcyFP');

// app.use(cors())
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


//for payment
// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'T-shirt',
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: 'https://example.com/success',
//     cancel_url: 'https://example.com/cancel',
//   });

//   res.json({ id: session.id });
// });








app.get('*', (req, res) => { 
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});