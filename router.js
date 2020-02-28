const express = require('express');

const router = express.Router();

router.route('/').get((req, res, next) => {
	res.send('Nodejs realtime app'+req.query.name);
});

module.exports = router;