const  MongoClient = require('mongodb').MongoClient;
const pathdev = require('dotenv').config({ path: './config/dev.env' });

class Usermanagement{

    async listuser(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
        let dbo = datajson.db(pathdev.parsed.database);
        let data=await dbo.collection("usermanagement").find(req).toArray();
        datajson.close();
        return data
    }

    async adduser(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
            let dbo = datajson.db(pathdev.parsed.database);
            let data=await dbo.collection("usermanagement").insertMany(req);
            datajson.close();
            return data.result 
    }

    async updateuser(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
        let dbo = datajson.db(pathdev.parsed.database);
        let data=await dbo.collection("usermanagement").updateMany(req.query,req.newquery);
        datajson.close();
        return data.result 

    }

    async deleteuser(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
        let dbo = datajson.db(pathdev.parsed.database);
        let data=await dbo.collection("usermanagement").deleteMany(req);
        datajson.close();
        return data.result 

    }

}
const usermanagement = new Usermanagement();
module.exports = usermanagement;