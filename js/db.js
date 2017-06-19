var MongoClient = require('mongoDB').MongoClient;

MongoClient.connect("mongodb://localhost:27017/hypermedia", function(err, db){
    if( !err ){
         console.log("We are connected");
    } else console.log(err);
});

