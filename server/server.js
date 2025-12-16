const express = require("express");
const session = require("express-session");
const http = require("http");
const {Server} = require("socket.io");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const server = http.createServer(app);
const io = new Server(server , {});
const PORT = 3000;

app.use(cors({
    origin:"*"
}));

app.use(express.json());


app.use(session({
    secret:"BLABLABLA@4nfgkg39rhg459hjb",
    saveUninitialized:false,
    resave:false
}));

const DB = mysql.createConnection({
    host:"localhost",
    database:"Store",
    user:"root",
    password:""
});

DB.connect((err) => {
    if (err) {
        console.error(err);
    }else{
        console.log("Dtabase Connected");
    };
});


app.post("/api/login" , (req , res) => {
    const {username , password} = req.body;

    DB.query(
        "SELECT * FROM `users` WHERE username=? AND password=?",
        [username , password],
        (err , result) => {
            if (err) {
                console.error(err);
            };
            if (result.length) {
                req.session.username = username;
                req.session.Islogin = true;
                res.json({Succ : true});
            }else{
                res.json({Succ : false});
            };
        }
    )

})



server.listen(PORT , () => {
    console.log(`server Starts on http://localhost:${PORT}`);
});
