const express = require ('express')
const {Checkout, verify, userOrder} = require('../controllers/paymentcoontroller')
const authmiddleware = require('../Middleware/usermiddleware')
const router = express.Router()

router.post('/checkout', Checkout)

// verify and save to db
router.post("/verify-payment", verify)

// user order
router.get('/userorder', authmiddleware, userOrder)

module.exports = router