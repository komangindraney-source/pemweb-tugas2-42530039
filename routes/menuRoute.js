const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.get('/', menuController.getAllMenu);
router.get('/menu/:id', menuController.getMenuDetail);

module.exports = router;
