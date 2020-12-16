const config = require('../secret/config.js');
const db = require('../models');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const tokenizer = require('../services/token')
const { restart } = require('nodemon');

exports.login = (req, res) => {
    db.Usuario.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (!user){
            console.log("User not found.")
            return res.status(404).send('User Not Found.');
        }

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid){
            return res.status(401).send({ auth: false, tokenReturn: null, reason: "Invalid Password!"})
        }

        var token = tokenizer.tokenEncode(user);

        res.status(200).send({ auth: true, tokenReturn: token })
    }).catch( err => {
        res.status(500).send('Error -> ' + err)
    })
    
}