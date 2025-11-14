const express = require('express')
const { addproduct, getallproduct, updateproduct, getsingleproduct, deleteproduct } = require('../controllers/productcontroller')
const cloudinaryfileuploader = require('../../server/Middleware/cloudinary')
const authmiddleware = require('../../server/Middleware/usermiddleware')
const router = express.Router()

router.post('/addproduct', authmiddleware, cloudinaryfileuploader.single("image"), addproduct)
router.get('/allproduct', getallproduct)
router.get('/singleproduct/:productid', getsingleproduct)
router.put('/updateproduct/:productid', authmiddleware, authmiddleware, cloudinaryfileuploader.single("image"), updateproduct)
router.delete('/deleteproduct/:productid', authmiddleware, deleteproduct)

module.exports = router