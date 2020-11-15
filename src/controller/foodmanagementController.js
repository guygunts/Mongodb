const foodmanagementService =require('../service/foodmanagementService');

class Foodmanagement{

    async listfood(req, res){
        const ret = await foodmanagementService.listfood(req.body);
        res.json(ret);
        res.end();
    }

    async addfood(req, res){
    const ret = await foodmanagementService.addfood(req.body);
      res.json(ret);
      res.end();
    }

    async updatefood(req, res){
        const ret = await foodmanagementService.updatefood(req.body);
        res.json(ret);
        res.end();
    }

    async deletefood(req, res){
        const ret = await foodmanagementService.deletefood(req.body);
        res.json(ret);
        res.end();

    }



}
const foodmanagement = new Foodmanagement();
module.exports = foodmanagement;