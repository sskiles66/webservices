
const mongodb = require('../db/connect');

const { ObjectId } = require('mongodb');

const getAllContacts = async (req, res) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
//   console.log(result);
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists); // we just need the first one (the only one)
  });
}

const getContact = async (req, res) => {
    const id = req;
    console.log(req);
    const result = await mongodb.getDb().db().collection('contacts').findOne({_id: new ObjectId(id)});
    // res.setHeader('Content-Type', 'application/json');
    // res.status(200).json(result);
    return result;
}


module.exports = {
    getAllContacts,
    getContact
}