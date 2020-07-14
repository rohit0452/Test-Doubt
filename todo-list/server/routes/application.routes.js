const express = require('express')
const applicationController = require('../controller/application.controller')

const router = express.Router

router.post('/addtask',applicationController.addtask);
router.post('/delete',applicationController.deletetask);
router.get('/edit',applicationController.edittask);
router.get('/showtask',applicationController.showtask)

module.exports = router ;