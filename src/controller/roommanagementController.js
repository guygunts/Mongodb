const roommanagementService =require('../service/roommanagementService');

class Roommanagement{

    async listroom(req, res){
        const ret = await roommanagementService.listroom(req.body);
        res.json(ret);
        res.end();
    }

    async addroom(req, res){
    const ret = await roommanagementService.addroom(req.body);
      res.json(ret);
      res.end();
    }

    async updateroom(req, res){
        const ret = await roommanagementService.updateroom(req.body);
        res.json(ret);
        res.end();
    }

    async deleteroom(req, res){
        const ret = await roommanagementService.deleteroom(req.body);
        res.json(ret);
        res.end();

    }



}
const roommanagement = new Roommanagement();
module.exports = roommanagement;