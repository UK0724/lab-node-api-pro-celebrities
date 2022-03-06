const express = require('express');
const { createdata, fetchdata, updatedata, deletedata } = require('../Controllers/fetchdata');
const router = express.Router()


router.post('/',createdata)
router.get('/',fetchdata)
router.put('/:id',updatedata)
router.delete('/:id',deletedata)




module.exports = router