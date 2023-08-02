const asyncHandler = require('express-async-handler');
//@desc Get all contacts
//@route GET /api/contacts
//@access public 
const getContact = asyncHandler(async (req, res)  => {
    res.status(200).json({
        message: "Get all contacts"
    });
});


//@desc Create contact
//@route POST /api/contacts
//@access public 
const postContact = asyncHandler(async (req, res) => {
    console.log("The request body is:", req.body)
    const {name, email, phone }= req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are Mandatory!")
    }
    res.status(201).json({
        message: "Create contact"
    });
}); 

//@desc Update contact
//@route PUT /api/contacts/id
//@access public 
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Update contact for ${req.params.id}`
    });
});

//@desc Delete a contact
//@route DELETS /api/contacts/id
//@access public 
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete contact fo ${req.params.id}`
    });
});


//@desc Get all contacts
//@route GET /api/contacts
//@access public 
const getoneContact = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Get one contact"
    });
});

module.exports = { 
        getContact, 
        postContact, 
        updateContact, 
        deleteContact, 
        getoneContact
     }