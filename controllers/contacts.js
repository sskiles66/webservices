const mongodb = require('../db/connect');

const { ObjectId } = require('mongodb');

const getAllContacts = async (req, res) => {
  const result = await mongodb.getDb().db().collection('contacts').find(); //db in .db param
  //   console.log(result);
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists); // we just need the first one (the only one)
  });
};

const addContact = async (req, res) => {
  const {firstName, lastName, email, favoriteColor, birthday} = req.body;
  const result = await mongodb.getDb().db().collection('contacts').insertOne({firstName, lastName, email, favoriteColor, birthday});
  
  res.status(200).send(`Inserted id: ${result.insertedId}`);
  
  
};

const getContact = async (req) => {
  const id = req;
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .findOne({ _id: new ObjectId(id) });
  // res.setHeader('Content-Type', 'application/json');
  // res.status(200).json(result);
  return result;
};

const editContact = async (req, res) => {
  // res.send("Exists")
  const {id} = req.params;
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...req.body
        },
      });
  res.status(200).send(result);

  // res.setHeader('Content-Type', 'application/json');
  // res.status(200).json(result);
  
};

const deleteContact = async (req, res) => {

  const {id} = req.params;
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .deleteOne(
      { _id: new ObjectId(id) });

  // res.sendStatus(result);

  // res.setHeader('Content-Type', 'application/json');
  res.status(200).json(result);
  
};

module.exports = {
  getAllContacts,
  getContact,
  addContact,
  editContact,
  deleteContact
};
