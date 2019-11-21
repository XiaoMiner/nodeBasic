const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    if(!req.query.test){
        res.status(400).send(JSON.stringify({'message': '参数错误'}));
        return false;
    }
    res.status(200).send(JSON.stringify({data: '测试页面'}))
});

module.exports = router;