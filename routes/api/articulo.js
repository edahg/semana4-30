/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const articuloController = require('../../controllers/ArticuloController');
const auth = require('../../middlewares/auth');

const router = routerx();


router.get('/list', articuloController.list);
router.post('/add', auth.verifyAdmin, articuloController.add);
<<<<<<< HEAD
router.put('/update', auth.verifyAdmin, articuloController.update)
router.put('/activate', auth.verifyAdmin, articuloController.activate)
router.put('/deactivate', auth.verifyAdmin, articuloController.deactivate)
=======
router.put('/update', auth.verifyAdmin, articuloController.update);
router.put('/activate', auth.verifyAdmin, articuloController.activate);
router.put('/deactivate', auth.verifyAdmin, articuloController.deactivate);

>>>>>>> master

module.exports = router;