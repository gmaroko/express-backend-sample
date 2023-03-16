const mongoose = require('mongoose');

let connectionOption = {
    maxPoolSize: 10,
    family: 4
}

const DB_URL = process.env.DB_URL;

let setup = () => {
    mongoose.connect(DB_URL, connectionOption);
    let db = mongoose.connection;
    db.once("open", ()=>{
        console.log("DB connection OK");
    })

    db.on("error", (error)=>{
        console.log("DB connection FAILED");
        console.log(error);
    })

    return db;
}

module.exports = setup;


