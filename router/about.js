let express = require('express');
let router = express.Router();

router.get('/about', function (req, res) {
    res.send('About birds')
})

module.exports = router;