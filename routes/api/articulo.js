/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const articuloController = require('../../controllers/ArticuloController');
const auth = require('../../middlewares/auth');

const router = routerx();


router.get('/list', auth.verifyUsuario, articuloController.list);
router.post('/add', auth.verifyUsuario, articuloController.add);


module.exports = router;