const express = require("express");
var cors = require('cors')

const app = express();
const bodyparser = require("body-parser");
app.use(cors());

const port = process.env.PORT || 3200;

const contacts = [{
  "id": 2345,
  "name": "Carl",
  "address": {
    "street": "Ruby",
    "city": "Dawn",
    "state": "Ga",
    "zip": "30534"
  },
  "phone": "6785551212"
}, {
  "id": 2346,
  "name": "Taty",
  "address": {
    "street": "Lane",
    "city": "Ville",
    "state": "Ga",
    "zip": "30477"
  },
  "phone": "4703187267"
}, {
  "id": 2347,
  "name": "Lila",
  "address": {
    "street": "Rock",
    "city": "Garden",
    "state": "Ga",
    "zip": "77422"
  },
  "phone": "7707707700"
}];

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false
}));

app.listen(port, () => {
  console.log(`running at port ${port}`);
});

app.get("/getAllContacts", (req, res) => {
  res.type('application/json')
  res.status(200).send(contacts);
});

app.post("/addContact", (req, res) => {
  const contact = req.body;
  contacts.push(contact);
  res.status(200).send(contacts);
});

app.post("/updateContactByID", (req, res) => {
  const contact = req.body;
  const id = req.body;
  for (let i = 0; i < contacts.length; i++){
    if (contacts[i].id === contact.id){
      contacts[i] = contact;
    }
  }
  res.status(200).send(contacts);
});

app.post("/deleteContactByID", (req, res) => {
  const contact = req.body;
  const id = req.body;
  for (let i = 0; i < contacts.length; i++){
    if (contacts[i].id === contact.id){
      contacts.splice(i,1);
    }
  }
  res.status(200).send(contacts);
});

app.post("/updateContactByName", (req, res) => {
  const contact = req.body;

  let found = false;
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].name === contact.name) {
      contacts[x] = contact;
      found = true;
    }
  }
  if (!found) {
    res.status(500).send('Not found');
  } else {
    res.status(200).send(contacts);
  }
});
