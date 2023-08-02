const express = require('express');
const router = express.Router();
const { 
    getContact, 
    postContact, 
    updateContact, 
    deleteContact,
    getoneContact
} = require('../controllers/contactController');

router.route('/').get(getContact).post(postContact);
router.route('/:id').get(getoneContact).put(updateContact).delete(deleteContact);

module.exports = router