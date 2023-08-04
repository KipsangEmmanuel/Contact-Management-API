const express = require('express');
const router = express.Router();
const { 
    getContact, 
    createContact, 
    updateContact, 
    deleteContact,
    getoneContact
} = require('../controllers/contactController');

router.route('/').get(getContact).post(createContact);
router.route('/:id').get(getoneContact).put(updateContact).delete(deleteContact);

module.exports = router