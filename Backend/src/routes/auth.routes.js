const express = require("express");
const authrouter = express.Router();
const authUser = require('../middlewares/auth.middleware');
const {
        registerUser,
        loginUser, 
        logoutUser,
        getMe
    } = require('../controllers/auth.controller')

authrouter.post("/register",registerUser);
authrouter.post("/login", loginUser);
authrouter.get('/logout', logoutUser);
authrouter.get('/get-me', authUser, getMe);

module.exports = authrouter;