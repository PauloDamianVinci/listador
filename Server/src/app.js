const express = require("express");
const router = require("./routes/index");
const server = express();

// Middleware para tener acceso sin seguridad (uso local):
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');
    //Preflight CORS handler
    // if (req.method === 'OPTIONS') {
    //     return res.status(200).json(({
    //         body: "OK"
    //     }))
    // }
});
// server.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//     next();
// });
// Middleware para manejar formato json (body):
server.use(express.json());
// Middleware para anteponerle "/listador" a las rutas:
server.use("/listador", router);
module.exports = server;