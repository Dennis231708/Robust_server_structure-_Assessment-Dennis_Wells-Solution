const uses = require('../../data/uses-data');

function listUses(req, res, next) {
    res.status(200).json({ data: uses });
}

function getUseById(req, res, next) {
    const useId = parseInt(req.params.useId, 10);
    const use = uses.find(use => use.id === useId);
    if (!use) {
        return next({ status: 404, message: `Use not found with ID ${useId}` });
    }
    res.status(200).json({ data: use });
}

module.exports = {
    listUses,
    getUseById,
};
