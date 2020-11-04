const express = require("express");

const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3200;

const contacts = [{
  "name": "Carl",
  "address": {
    "street": "Ruby",
    "city": "Dawn",
    "state": "Ga",
    "zip": "30534"
  },
  "phone": "6785551212",
  "isNewContact": false
}, {
  "name": "Taty",
  "address": {
    "street": "Lane",
    "city": "Ville",
    "state": "Ga",
    "zip": "30477"
  },
  "phone": "4703187267",
  "isNewContact": false
}, {
  "name": "Lila",
  "address": {
    "street": "Rock",
    "city": "Garden",
    "state": "Ga",
    "zip": "77422"
  },
  "phone": "7707707700",
  "isNewContact": false
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

app.patch("/addContact/:contact", (req, res) => {
  const contact = req.params.contact;
  contacts.push(contact);
});
