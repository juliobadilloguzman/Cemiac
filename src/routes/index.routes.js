const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/enviarCorreo', (req, res) => {
    res.json({ message: 'cool' });
});

module.exports = router;