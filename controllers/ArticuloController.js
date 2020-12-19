const db = require('../models');

module.exports = {
    list: async(req, res) => {
        const articulo = await db.Articulo.findAll();
        res.status(200).json(articulo)
    },

    add: async(req, res) => {
        const articulo = await db.Articulo.create(req.body);
        res.status(200).json(articulo);
    },

    update: async(req, res) => {
        const articulo = await db.Articulo.update({nombre:req.body.nombre, codigo:req.body.codigo, descripcion:req.body.descripcion}, 
            {where:{id:req.body.id}});
        res.status(200).json(articulo);
    },

    activate: async(req, res) => {
        const articulo = await db.Articulo.update({estado:1}, 
            {where:{id:req.body.id}});
        res.status(200).json(articulo);
    },

    deactivate: async(req, res) => {
        const articulo = await db.Articulo.update({estado:0}, 
            {where:{id:req.body.id}});
        res.status(200).json(articulo);
    }
}