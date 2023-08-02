//@desc Get all contacts
//@route GET /api/contacts
//@access public 
const getContact = (req, res) => {
    res.status(200).json({
        message: "Get all contacts"
    });
}


//@desc Create contact
//@route POST /api/contacts
//@access public 
const postContact = (req, res) => {
    res.status(201).json({
        message: "Create contact"
    });
}

//@desc Update contact
//@route PUT /api/contacts/id
//@access public 
const updateContact = (req, res) => {
    res.status(200).json({
        message: `Update contact for ${req.params.id}`
    });
}

//@desc Delete a contact
//@route DELETS /api/contacts/id
//@access public 
const deleteContact = (req, res) => {
    res.status(200).json({
        message: `Delete contact fo ${req.params.id}`
    });
}


//@desc Get all contacts
//@route GET /api/contacts
//@access public 
const getoneContact = (req, res) => {
    res.status(200).json({
        message: "Get one contact"
    });
}

module.exports = { 
        getContact, 
        postContact, 
        updateContact, 
        deleteContact, 
        getoneContact
     }