const jwt = require('jsonwebtoken');
const Util = require('../util/util');


exports.isAuthenticated = (req, res, next) => {
    
    if(!req.session.isLoggedIn){
        res.status(400);
        return res.json({result:'You must be logged in to complete this action'})
    };

    next();
};

exports.isAdmin = (req, res, next) => {
    //maybe session cookies will work
    if(!req.session.isAdmin){
        res.status(400);
        return res.json({result:'You must be an Admin to complete this action'})
    };

    next();
};

exports.tokenMiddleWare = (req, res, next) => {

    const token = req.get('Authorization').split(' ')[1];
    let decodedToken;

    try{

        decodedToken = jwt.verify(token, 'superlongreallylongstringofstrings');
    }
    catch (err) {

        return Util.errorCatcher('You must be authenticated to access this.')
    }

    req.userId = decodedToken.userId;

    next();
};

exports.corsMiddleWare = (req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST', 'PUT', 'PATCH', 'DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
    next();
};
