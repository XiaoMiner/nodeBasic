const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next){
    console.log(req.body);
    if(!req.body.testThree){
        res.status(400).send(JSON.stringify({'message': '参数错误'}));
        return false;
    }
    res.status(200).send(JSON.stringify({data: '第三个测试页面'}))
});

module.exports = router;