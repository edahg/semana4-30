const db = require('../models');

module.exports = {
    list: async(req, res) => {
        const categoria = await db.Articulo.findAll();
        res.status(200).json(categoria)
    },

    add: async(req, res) => {
        const articulo = await db.Articulo.create(req.body);
        res.status(200).json(articulo);
    }
}