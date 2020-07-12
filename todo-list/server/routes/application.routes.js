const express = require('express')
const applicationController = require('../controller/application.controller')

const router = express.Router

router.post('/addtask',applicationController.addtask);
router.post('/delete',applicationController.deletetask);
router.post('/edit',applicationController.edittask);

module.exports = router ;