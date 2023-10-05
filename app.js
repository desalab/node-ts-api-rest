"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = 3000;
app.use(express_1.default.json());
// Data
var usuarios = [
    { id: 1, nombre: 'Ana Gomez' },
    { id: 2, nombre: 'Julio Vargas' },
    { id: 3, nombre: 'Jorge Chavez' },
    { id: 9, nombre: 'Marco Aliaga' }
];
// GET /api/v1/usuarios
app.get('/api/v1/usuarios', function (req, res) {
    res.status(200).json(usuarios);
});
// POST /api/v1/usuarios
app.post('/api/v1/usuarios', function (req, res) {
    var newUser = req.body;
    usuarios.push(newUser);
    res.status(201).json(newUser);
});
app.listen(PORT, function () {
    console.log("Servidor nodejs corriendo en el puerto : ".concat(PORT));
});
