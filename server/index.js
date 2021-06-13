const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;
const path = require ('path');
const stripe = require ('stripe')('sk_test_51J1vqqIjewuKal2UQMO2GnNXUHsOpis3y9RzdOsonFTpOaZ8KSR6Sfwysof7IqAMvd6xI1XdKgYOLI3ppoM9lqt300HHdrcyFP');
const uuid = require('uuid/v4');

app.use(express.json());
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


//for payment : I copied the code from something like documentation and added something in it so it can work 
app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);
  let totalPrice =  0;
  let tax =2;
  let name ="";
  let error;
  let status;
  try {
    const { cart, token } = req.body;
    cart.map((item) =>{
      totalPrice+= item.price + tax;
      name += ", " + item.title;
    })
    console.log(totalPrice)
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: totalPrice* 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased : ${name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});







app.get('*', (req, res) => { 
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});