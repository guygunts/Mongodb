const  MongoClient = require('mongodb').MongoClient;
const pathdev = require('dotenv').config({ path: './config/dev.env' });

class Foodmanagement{
    
    async listfood(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
        let dbo = datajson.db(pathdev.parsed.database);
        let data=await dbo.collection("food").find(req).toArray();
        datajson.close();
        return data
    }

    async addfood(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
            let dbo = datajson.db(pathdev.parsed.database);
            let data=await dbo.collection("food").insertMany(req);
            datajson.close();
            return data.result 
    }

    async updatefood(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
        let dbo = datajson.db(pathdev.parsed.database);
        let data=await dbo.collection("food").updateMany(req.query,req.newquery);
        datajson.close();
        return data.result 

    }

    async deletefood(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
        let dbo = datajson.db(pathdev.parsed.database);
        let data=await dbo.collection("food").deleteMany(req);
        datajson.close();
        return data.result 

    }

}
const foodmanagement = new Foodmanagement();
module.exports = foodmanagement;