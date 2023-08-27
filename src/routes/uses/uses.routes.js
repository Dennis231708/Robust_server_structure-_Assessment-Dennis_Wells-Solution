const express = require('express');
const router = express.Router();
const { listUses, getUseById } = require('../../controllers/uses/uses.controller');

router.get('/', listUses);
router.get('/:useId', getUseById);

module.exports = router;
