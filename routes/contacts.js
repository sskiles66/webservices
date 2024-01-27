const router = require("express").Router();

const { getAllContacts, getContact, addContact, editContact, deleteContact } = require("../controllers/contacts")



router.get("/", getAllContacts);

router.get("/single", async (req, res) => {
    const id = req.query.id;
    const contact = await getContact(id);
    console.log(contact);
    res.setHeader('Content-Type', 'application/json');
    res.send(contact);
});

router.post("/", addContact);

router.put("/edit/:id", editContact);

router.delete("/deleteOne/:id", deleteContact)




module.exports = router;