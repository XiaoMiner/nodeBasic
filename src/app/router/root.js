const express = require('express');
const router = express.Router();
const testHandle = require('./testPage/index');
// 测试页面
router.use('/testPage', testHandle);

module.exports = router;