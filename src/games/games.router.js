const router = require('express').Router()

const { use } = require('express/lib/application')
const useServices= require('./games.https')

//A.GET--ver todos los juegos
router.route('/')
.get(useServices.getAll)


//B.POST--Crear o registrar un juego    
router.post('/register',useServices.register)

//C.PUST--EDITAR un juego
router.put('/edit/:id',useServices.edit)

//D.DELETE--Borrar un juego por id
router.delete('/delete/:id',useServices.deleteById)


// router.route('/:id')

//     .get(useServices.getById)
//     .delete(useServices.remove)
//     .put(useServices.edit)


exports.router=router