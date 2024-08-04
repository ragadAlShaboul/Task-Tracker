const User = require('../models/User')
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.signup = async (req, res) => {
    const { username, password } = req.body

    try {
        let user = await User.findOne({ username })
        if (user) {
            return res.status(400).json({ msg: 'User already exists' })
        }

        user = new User({ username, password })

        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)

        await user.save()

        const payload = {
            user: {
                id: user.id,
            },
        }

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            (err, token) => {
                if (err) throw err
                res.json({ token })
            }
        );
    } catch (err) {
        res.status(500).send()
    }
}


exports.login = async (req, res) => {
    const { username, password } = req.body

    try {
        let user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' })
        }

        const payload = {
            user: {
                id: user.id,
            },
        }

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        )
    } catch (err) {
        res.status(500).send()
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (err) {
        res.status(500).send()
    }
}
