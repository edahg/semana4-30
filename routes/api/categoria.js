const routerx = require('express-promise-router');
const categoriaController = require('../../controllers/CategoriaController');
const auth = require('../../middlewares/auth');

const router = routerx();


router.get('/list', auth.verifyUsuario, categoriaController.list);
router.post('/add', auth.verifyAdmin, categoriaController.add)


module.exports = router;