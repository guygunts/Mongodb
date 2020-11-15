const  MongoClient = require('mongodb').MongoClient;
const pathdev = require('dotenv').config({ path: './config/dev.env' });

class Roommanagement{
    
    async listroom(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
        let dbo = datajson.db(pathdev.parsed.database);
        let data=await dbo.collection("room").find(req).toArray();
        datajson.close();
        return data
    }

    async addroom(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
            let dbo = datajson.db(pathdev.parsed.database);
            let data=await dbo.collection("room").insertMany(req);
            datajson.close();
            return data.result 
    }

    async updateroom(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
        let dbo = datajson.db(pathdev.parsed.database);
        let data=await dbo.collection("room").updateMany(req.query,req.newquery);
        datajson.close();
        return data.result 

    }

    async deleteroom(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
        let dbo = datajson.db(pathdev.parsed.database);
        let data=await dbo.collection("room").deleteMany(req);
        datajson.close();
        return data.result 

    }

}
const roommanagement = new Roommanagement();
module.exports = roommanagement;