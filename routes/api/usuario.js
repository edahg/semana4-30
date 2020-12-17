const router = require('express').Router();
const models = require('../../models');
const usuarioController = require('../../controllers/UsuarioController.js');
const bcrypt = require('bcryptjs');
const auth = require('../../middlewares/auth');

const { restart } = require('nodemon');

router.get('/list', auth.verifyAdmin,  async(req, res) => {
    const usuario = await models.Usuario.findAll();
    res.status(200).json(usuario)
})

router.post('/signup', async(req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password)
    const user = await models.user.create(req.body);
    res.status(200).json(usuario);
})

router.post('/login', usuarioController.login);

module.exports = router;