var jwt = require('jsonwebtoken');
const models = require('../models');
const config = require('../secret/config');


module.exports = {

    //todo 

    //generar el token
    encode: async(user) => {
        const token = jwt.sign({ id: user.id, name: user.name, rol: user.rol}, config.secret, {expiresIn: 86400,})
        console.log(token)
        return token;
    },
    //permite decodificar el token
    decode: async(token) => {
        try {
            const decoded = jwt.verify(token, config.secret);
            return decoded;
        } catch (e) {

        }

    }
}