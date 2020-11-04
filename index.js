const express = require("express");

const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3200;

const contacts = [{
    name: 'bob mcnamara',
    phone: '5551212'
  },
  {
    name: 'susan mcnamara',
    phone: '5553344'
  }
];

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false
}));

app.listen(port, () => {
  console.log(`running at port ${port}`);
});

app.get("/getAllContacts", (req, res) => {
  res.status(200).send(contacts);
});

app.patch("/addContact/:contact", (req, res) => {
  const contact = req.params.contact;
  contacts.push(contact);
});
