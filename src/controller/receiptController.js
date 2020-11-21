const receiptService =require('../service/receiptService');

class Receipt{

    async listreceipt(req, res){
        const ret = await receiptService.listreceipt(req.body);
        res.json(ret);
        res.end();
    }

    async addreceipt(req, res){
    const ret = await receiptService.addreceipt(req.body);
      res.json(ret);
      res.end();
    }

    async updatereceipt(req, res){
        const ret = await receiptService.updatereceipt(req.body);
        res.json(ret);
        res.end();
    }

    async deletereceipt(req, res){
        const ret = await receiptService.deletereceipt(req.body);
        res.json(ret);
        res.end();

    }



}
const receipt = new Receipt();
module.exports = receipt;