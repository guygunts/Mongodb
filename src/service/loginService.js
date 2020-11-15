const  MongoClient = require('mongodb').MongoClient;
const pathdev = require('dotenv').config({ path: './config/dev.env' });

class Loginmanagement{
    
    async login(req){
        let datajson = await MongoClient.connect(pathdev.parsed.url)
        let dbo = datajson.db(pathdev.parsed.database);
        let data=await dbo.collection("usermanagement").find(req).toArray();
        datajson.close();
        return data
    }

}
const loginmanagement = new Loginmanagement();
module.exports = loginmanagement;