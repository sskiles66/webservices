const router = require("express").Router();

const { getAllContacts, getContact } = require("../controllers/contacts")



router.get("/", getAllContacts);

router.get("/single", async (req, res) => {
    const id = req.query.id;
    const contact = await getContact(id);
    console.log(contact);
    res.setHeader('Content-Type', 'application/json');
    res.send(contact);
});




module.exports = router;