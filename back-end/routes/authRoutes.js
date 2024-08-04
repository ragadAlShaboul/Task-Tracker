const express = require('express')
const {check} = require('express-validator')
const authController = require('../controllers/authController.js')

const router = express.Router()


router.post(
    '/signup',
    [
        check('username', 'Username is required').not().isEmpty(),
        check('password', 'Password is required'),
    ],
    authController.signup
)

router.post(
    '/login',
    [
        check('username', 'Username is required').not().isEmpty(),
        check('password', 'Password is required').exists(),
    ],
    authController.login
)

module.exports = router
