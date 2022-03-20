const jwt = require('jsonwebtoken')
const UserSchema = require('../model/user')
exports.isAuth = async (req, res, next) => {
    try {
        const token = req.headers['authorisation']
        if (!token) { return res.send("you are not authorised") }
        var decoded = jwt.verify(token, 'secret')
        const user = await UserSchema.findById(decoded._id)
        req.user = user
        next()
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "is auth server error" }] })
    }
}
