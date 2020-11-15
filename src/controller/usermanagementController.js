const usermanagementService =require('../service/usermanagementService');

class usermanagement{

    async listuser(req, res){
        const ret = await usermanagementService.listuser(req.body);
        res.json(ret);
        res.end();
    }

    async adduser(req, res){
    const ret = await usermanagementService.adduser(req.body);
      res.json(ret);
      res.end();
    }

    async updateuser(req, res){
        const ret = await usermanagementService.updateuser(req.body);
        res.json(ret);
        res.end();
    }

    async deleteuser(req, res){
        const ret = await usermanagementService.deleteuser(req.body);
        res.json(ret);
        res.end();

    }



}
const Usermanagement = new usermanagement();
module.exports = Usermanagement;