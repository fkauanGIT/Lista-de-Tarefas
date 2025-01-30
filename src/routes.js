const express = require('express')
const taskListController = require('./controllers/taskListController')

const router = express.Router()

router.get('/', (req, res) => res.render('index'))

router.get('/app', taskListController.index)
router.get('/app/nova-lista', taskListController.create)
router.post('/app/nova-lista', taskListController.save)

router.get('/app/:id', taskListController.show)
router.post('/app/:id/nova-tarefa', taskListController.addTask)
router.post('/app/:id/excluir', taskListController.delete)

router.post('/app/:listId/completar/:taskId', taskListController.completeTask)
router.post('/app/:listId/desfazer/:taskId', taskListController.undoTask)


module.exports = router