const UserSchema = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { RegisterValidation, Validator } = require("../middlewares/validation")



const Register=(RegisterValidation, Validator,async (req, res) => {
    const { username, email, password } = req.body
    try {
        const user = new UserSchema(req.body)
        const found = await UserSchema.findOne({ email })
        if (found) { return res.status(400).send("user already exists") }
        const salt = 10
        const hashedpassword = bcrypt.hashSync(password, salt)
        user.password = hashedpassword
        const payload = { _id: user._id }
        const token = jwt.sign(payload, process.env.SecretOrKey)
        await user.save()
        res.status(200).send({ msg: "register succeded", user, token })
    } catch (error) {
        res.status(400).send({ errors: [{ msg: 'could not register' }] })

    }
})



const Login =(async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserSchema.findOne({ email })

        if (!user) { return res.status(400).send({ errors: [{ msg: 'bad credantials' }] }) }
        const match = bcrypt.compareSync(password, user.password)
        if (!match) { return res.status(400).send({ errors: [{ msg: 'bad credantials' }] }) }
        const payload = { _id: user._id }
        const token = jwt.sign(payload, process.env.SecretOrKey)
        res.status(200).send({ msg: "login succeded", user, token })
    } catch (error) {
        res.status(400).send({ errors: [{ msg: 'could not login' }] })
    }
})

const getMe=((req,res)=>res.send(req.user))

module.exports=
{
    Register,
    Login,
    getMe, 
}