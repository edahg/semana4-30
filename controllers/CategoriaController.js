const db = require('../models');

module.exports = {
    list: async(req, res) => {
        const categoria = await db.Categoria.findAll();
        res.status(200).json(categoria)
    },

    add: async(req, res) => {
        const categoria = await db.Categoria.create(req.body);
        res.status(200).json(categoria);
    },

    update: async(req, res) => {
        const categoria = await db.Categoria.update({nombre:req.body.nombre, descripcion:req.body.descripcion}, 
            {where:{id:req.body.id}});
        res.status(200).json(categoria);
    },

    activate: async(req, res) => {
        const categoria = await db.Categoria.update({estado:1}, 
            {where:{id:req.body.id}});
        res.status(200).json(categoria);
    },

    deactivate: async(req, res) => {
        const categoria = await db.Categoria.update({estado:0}, 
            {where:{id:req.body.id}});
        res.status(200).json(categoria);
    }
}