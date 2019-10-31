const express = require('express'),
    router = express.Router();

router.get('/:answer?', (req, res) => {
    const { answer } = req.params;

    const snippet = `<p>The secret number is ${answer}</p>`;
    res.status(200).send(snippet).end();
});

module.exports = router;