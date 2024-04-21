const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const { getConnection, runQueryValues, registerSyntax } = require('../config/connection');

const bcSaltRounds = 10; 

const insertUser = async (req, res) => {
    const credentials = {
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcSaltRounds),
        role: req.body.role
    };

    const connection = await getConnection();
    try {
        const result = await runQueryValues(connection, registerSyntax, [credentials.fullname, credentials.username, credentials.email, credentials.password, credentials.role]);
        res.status(200).json({ message: result });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" }); 
    }
};

module.exports = {
    insertUser: insertUser 
};
