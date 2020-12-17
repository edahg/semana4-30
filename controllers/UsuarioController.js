const db = require('../models');
var bcrypt = require('bcryptjs');
const tokenService = require('../services/token')

exports.login = async(req, res) => {
    try{
        const user = await db.Usuario.findOne({where: {
            email: req.body.email
        }})
        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid){
                const token = await tokenService.encode(user.id, user.rol)
                res.status(200).send({ auth: true, tokenReturn: token })
            }else{
                return res.status(401).send({ auth: false, tokenReturn: null, reason: "Invalid Password!"})
            }
        }else{
            return res.status(404).send('User Not Found.');
        }
    }catch(err) {
        res.status(500).send('Error -> ' + err)
    }
}