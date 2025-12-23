const express = require("express");
const session = require("express-session");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});
const PORT = 3000;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


app.use(express.json());

app.use(session({
    secret: "BLABLABLA@4nfgkg39rhg459hjb",
    saveUninitialized: false,
    resave: false,
    cookie: {
        httpOnly: true,
        secure: false
    }
}));



const DB = mysql.createConnection({
    host: "localhost",
    database: "Store",
    user: "root",
    password: ""
});

DB.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Database Connected");
    };
});


app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    DB.query(
        "SELECT * FROM `users` WHERE username=? AND password=?",
        [username, password],
        (err, result) => {
            if (err) {
                console.error(err);
            };
            if (result.length) {
                req.session.username = username;
                req.session.Islogin = true;
                res.json({ Succ: true });
            } else {
                res.json({ Succ: false });
            };
        }
    )

})

app.post("/api/register", (req, res) => {
    const { username, Email, password } = req.body;

    DB.query(
        "SELECT * FROM `users` WHERE username=? OR Email=?",
        [username, Email],
        (err, result) => {
            if (err) {
                console.error("Err in SignUp" + err);
            }
            if (result.length > 0) {
                res.json({ succ: false, msg: "username Already exist" });
            } else {
                DB.query(
                    "INSERT INTO `users`(`username`, `Email`, `password`) VALUES (? , ? , ?)",
                    [username, Email, password],
                    (err, result) => {
                        if (err) {
                            console.error("err in Sign up in scd" + err);
                        };
                        if (result.affectedRows > 0) {
                            res.json({ succ: true });
                        } else {
                            res.json({ succ: false });
                        };
                    }
                );
            };
        }
    );
});

app.post("/api/mustlogin", (req, res) => {
    if (req.session.username) {
        res.json({ Islogin: true });
    } else {
        res.json({ Islogin: false });
    };
});

app.post("/api/logout", (req, res) => {
    req.session.destroy();
    res.json({ succ: true });
})

app.post("/api/addpost", (req, res) => {
    const { title, text } = req.body;
    DB.query(
        "INSERT INTO `posts`(`user`, `title`, `Text` , `Likes`) VALUES ( ? , ? , ? , ?)",
        [req.session.username, title, text, 0],
        (err, result) => {
            if (err) {
                console.error(err);
            };
            if (result.affectedRows > 0) {
                res.json({ succ: true });
            } else {
                res.json({ succ: false });
            };
        }
    );
});


io.on("connection", (socket) => {
    console.log(`socket id : ${socket.id}`);
    socket.on("loadposts", () => {
        DB.query(
            "SELECT * FROM `posts`",
            [],
            (err, result) => {
                if (err) {
                    console.error(err);
                };
                if (result.length > 0) {
                    socket.emit("reversposts", result);
                };
            }
        );
    });
});

server.listen(PORT, () => {
    console.log(`server Starts on http://localhost:${PORT}`);
});
