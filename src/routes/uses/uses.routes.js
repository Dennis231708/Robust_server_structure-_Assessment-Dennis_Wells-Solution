const express = require('express');
const router = express.Router();
const { listUses, getUseById, createUse, updateUse, deleteUse, deleteUseById } = require('../../controllers/uses/uses.controller');

router.get('/', listUses);
router.post('/', createUse)
router.put('/', updateUse)
router.delete('/', deleteUse)


router.get('/:useId', getUseById);
router.post('/:useId', createUse)
router.put('/:useId', updateUse)
router.delete('/:useId', deleteUseById)

module.exports = router;
