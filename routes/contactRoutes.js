const express = require("express");
const router = express.Router();
const {
    getContacts,
    getContact,
    createContact,
    delelteContact,
    updateContact
} = require("../controllers/contactCotrolletr");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(delelteContact);



module.exports= router;