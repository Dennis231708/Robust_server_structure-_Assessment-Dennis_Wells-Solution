const urls = require('../../data/urls-data');
const uses = require('../../data/uses-data');

function createUrl(req, res) {
    const { data } = req.body;

    if (!data || !data.href) {
        return res.status(400).json({ error: "Missing 'href' property in request body" });
    }

    const newUrl = {
        id: urls.length + 1,
        href: data.href,
    };

    urls.push(newUrl);

    res.status(201).json({ data: newUrl });
}
function createUrlWithId(req, res) {
    res.status(405).json({ error: "Cannot create URL with a specific ID using POST" });
}

function listUrls(req, res, next) {
    res.status(200).json({ data: urls });
}

function getUrlById(req, res, next) {
    const urlId = parseInt(req.params.urlId, 10);
    const url = urls.find(url => url.id === urlId);
    if (!url) {
        return next({ status: 404, message: `URL not found with ID ${urlId}` });
    }
    uses.push({ id: uses.length + 1, urlId, time: Date.now() });
    res.status(200).json({ data: url });
}

function updateUrl(req, res, next) {
    const { urlId } = req.params;
    const { data } = req.body;

    if (urlId === undefined) {
        return next({ status: 405, message: "Method not allowed: PUT" });
    }

    const urlToUpdate = urls.find((url) => url.id === +urlId);

    if (!urlToUpdate) {
        return res.status(404).json({ error: `URL with id ${urlId} not found` });
    }

    // Update the URL only if the 'href' property is present in the request body
    if (data.href) {
        urlToUpdate.href = data.href;
    }

    // Update the urls array
    const indexToUpdate = urls.findIndex((url) => url.id === +urlId);
    urls[indexToUpdate] = urlToUpdate;

    res.status(200).json({ data: urlToUpdate });
}

function updateUrlUseWithId(req, res) {
    res.status(405).json({ error: "Cannot update URL usage with a specific ID using PUT" });
}
function createUrlUseWithId(req, res) {
    res.status(405).json({ error: "Cannot create URL usage with a specific ID using POST" });
}

function deleteUrlUseWithId(req, res) {
    res.status(405).json({ error: "Cannot delete URL usage with a specific ID using DELETE" });
}


function recordUrlUse(req, res, next) {
    const urlId = parseInt(req.params.urlId, 10);
    const url = urls.find(url => url.id === urlId);
    if (!url) {
        return next({ status: 404, message: `URL not found with ID ${urlId}` });
    }
    const urlUses = uses.filter(use => use.urlId === urlId);
    res.status(200).json({ data: urlUses });
}
function deleteUrl(req, res) {
    res.status(405).json({ error: "DELETE method not allowed" });
}


function getUrlUseById(req, res) {
    const { urlId, useId } = req.params;

    const urlIdNumber = parseInt(urlId, 10);
    const useIdNumber = parseInt(useId, 10);

    const url = urls.find(u => u.id === urlIdNumber);
    const use = uses.find(u => u.id === useIdNumber && u.urlId === urlIdNumber);

    if (!url || !use) {
        return res.status(404).json({ error: "Use or URL not found" });
    }

    res.status(200).json({ data: use });
}


module.exports = {
    createUrl,
    createUrlWithId,
    listUrls,
    getUrlById,
    updateUrl,
    recordUrlUse,
    deleteUrl,
    updateUrlUseWithId,
    createUrlUseWithId,
    deleteUrlUseWithId,
    getUrlUseById,
};
