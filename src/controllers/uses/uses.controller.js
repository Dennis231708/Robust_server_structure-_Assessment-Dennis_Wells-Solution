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
function createUse(req, res) {
    return res.status(405).json({ error: "POST method not allowed" });
}
function updateUse(req, res) {
    return res.status(405).json({ error: "PUT method not allowed" })
}

function deleteUse(req, res) {
    return res.status(405).json({ error: "DELETE method not allowed" })
}
function deleteUseById(req, res) {
    const useId = parseInt(req.params.useId, 10);

    const index = uses.findIndex((use) => use.id === useId);
    if (index === -1) {
        return res.status(404).json({ error: `Use with ID ${useId} not found` });
    }

    uses.splice(index, 1);

    return res.sendStatus(204);
}

module.exports = {
    listUses,
    getUseById,
    createUse,
    updateUse,
    deleteUse,
    deleteUseById
};
