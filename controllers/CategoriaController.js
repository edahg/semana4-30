const db = require('../models');

module.exports = {
    list: async(req, res) => {
        const categoria = await db.Categoria.findAll();
        res.status(200).json(categoria)
    },

    add: async(req, res) => {
        const categoria = await db.Categoria.create(req.body);
        res.status(200).json(categoria);
    }
}