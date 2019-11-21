const express = require('express');
const router = express.Router();
const test = require('./test');
const testTwo = require('./testTwo');
const testThree = require('./testThree');

router.use('/test', test);
router.use('/testTwo', testTwo);
router.use('/testThree', testThree);

module.exports = router;
