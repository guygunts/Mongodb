var express = require('express');
const  MongoClient = require('mongodb').MongoClient;
const pathdev = require('dotenv').config({ path: './config/dev.env' });
const router = express.Router();
const usermanagement = require('../src/controller/usermanagementController');
const food = require('../src/controller/foodmanagementController');
const room = require('../src/controller/roommanagementController');
const login = require('../src/controller/loginContrller');

router.post('/login',login.loginuser)



router.post('/listusermanagement',usermanagement.listuser)
router.post('/adduserusermanagement',usermanagement.adduser)
router.post('/updateuserusermanagement',usermanagement.updateuser)
router.post('/deleteuserusermanagement',usermanagement.deleteuser)

router.post('/listfood',food.listfood)
router.post('/addfood',food.addfood)
router.post('/updatefood',food.updatefood)
router.post('/deletefood',food.deletefood)

router.post('/listroom',room.listroom)
router.post('/addroom',room.addroom)
router.post('/updateroom',room.updateroom)
router.post('/deleteroom',room.deleteroom)

router.get('/createdb',createdb)

async function createdb(){
    let datajson = await MongoClient.connect(`mongodb://${pathdev.parsed.host}/${pathdev.parsed.database}${pathdev.parsed.option}`)
    let dbo = datajson.db(`${pathdev.parsed.database}`);
    try{
        dbo.createCollection("calendar")
        dbo.createCollection("detail")
        dbo.createCollection("food")
        dbo.createCollection("receipt")
        dbo.createCollection("role")
        dbo.createCollection("room")
        dbo.createCollection("usermanagement")
        
    }catch(err){
        return err
    }
    datajson.close();
}
module.exports = router;