const  MongoClient = require('mongodb').MongoClient;
const pathdev = require('dotenv').config({ path: './config/dev.env' });

class Receipt{

    async listreceipt(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
        let dbo = datajson.db(pathdev.parsed.database);
        let data=await dbo.collection("receipt").find(req).toArray();
        datajson.close();
        return data
    }

    async addreceipt(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
            let dbo = datajson.db(pathdev.parsed.database);
            let data=await dbo.collection("receipt").insertMany(req);
            datajson.close();
            return data.result 
    }

    async updatereceipt(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
        let dbo = datajson.db(pathdev.parsed.database);
        let data=await dbo.collection("receipt").updateMany(req.query,req.newquery);
        datajson.close();
        return data.result 

    }

    async deletereceipt(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
        let dbo = datajson.db(pathdev.parsed.database);
        let data=await dbo.collection("receipt").deleteMany(req);
        datajson.close();
        return data.result 

    }

}
const receipt = new Receipt();
module.exports = receipt;