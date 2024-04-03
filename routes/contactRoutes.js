const express = require("express");
const router = express.Router();
const {
    getContacts,
    getContact,
    createContact,
    delelteContact,
    updateContact
} = require("../controllers/contactCotrolletr");

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(delelteContact);



module.exports= router;