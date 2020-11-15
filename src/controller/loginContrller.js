const e = require('express');
const loginService =require('../service/loginService');

class Login{
async loginuser(req, res){

    for (const property in req.body) {
      let data={
          [property]:req.body[property]
        }
      const ret = await loginService.login(data);
      if(ret.length>0){
      if(ret[0].username !== req.body.username){
        res.status(400);
        let data ={
            'mess':'username is wrong'
        }
        res.json(data);
        res.end();
        break
      }else if(ret[0].pass !== req.body.pass){
        res.status(400);
        let data ={
            'mess':'password is wrong'
        }
        res.json(data);
        res.end();
        break
      }else{
        let data ={
            'mess':'success'
          }
        res.json(data);
        res.end();
      }
    }
      }
}
}
const login = new Login();
module.exports = login;