const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async(req,res) =>{
    res.status(200).json({messege:"Get All Contacts"});
});

//@desc Create new contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async(req,res) =>{
    console.log("The request body is :",req.body);
    const {name,email,phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("All fileds must be filled!")
    }
    res.status(201).json({messege:"Create Contacts"});
});

//@desc Get contact
//@route Get /api/contacts
//@access public

const getContact = asyncHandler(async(req,res) =>{
    res.status(200).json({messege: `Get contact fro ${req.params.id}`});
});

//@desc Update contact
//@route POST /api/contacts/:id
//@access public

const updateContact =asyncHandler(async(req,res) =>{
    res.status(200).json({messege:`Update contact for ${req.params.id}`});
});


//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public

const delelteContact = asyncHandler(async(req,res) =>{
    res.status(200).json({messege:`Delete contact for ${req.params.id}`});
});


module.exports = {
    getContacts,
    getContact,
    createContact,
    delelteContact,
    updateContact
} ;