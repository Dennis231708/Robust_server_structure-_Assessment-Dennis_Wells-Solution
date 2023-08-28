const express = require('express');
const router = express.Router();
const { createUrl, listUrls, getUrlById, updateUrl, recordUrlUse, deleteUrl, createUrlWithId, updateUrlUseWithId, deleteUrlUseWithId, getUrlUseById, updateUrlUse, createUrlUseWithId, deleteUrlUse } = require('../../controllers/urls/urls.controller');

router.post('/', createUrl);
router.get('/', listUrls);
router.delete("/", deleteUrl);
router.put("/", updateUrl);

router.get('/:urlId', getUrlById);
router.put("/:urlId", updateUrl);
router.delete("/:urlId", deleteUrl)
router.post("/:urlId", createUrlWithId)

router.put('/:urlId/uses', updateUrlUseWithId);
router.post('/:urlId/uses', createUrlWithId)
router.delete('/:urlId/uses', deleteUrlUseWithId)
router.get('/:urlId/uses', recordUrlUse);

router.get('/:urlId/uses/:useId', getUrlUseById);
router.put("/:urlId/uses/:useId", updateUrlUse);
router.post("/:urlId/uses/:useId", createUrlUseWithId);
router.delete("/:urlId/uses/:useId", deleteUrlUse);





module.exports = router;
