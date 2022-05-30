const jwt = require('jsonwebtoken');

exports.isAdmin = (req, res, next) => {
    //maybe session cookies will work
    if(!req.session.isAdmin){
        res.status(400);
        return res.json({result:'You must be an Admin to complete this action'})
    };

    next();
};

exports.isAuthenticated = (req, res, next) => {

    const authHeader = req.get('Authorization');

    if(!authHeader){

        const error = new Error('Not Authenticated');
        error.status = 401;
        throw error;
    };

    const token = req.get('Authorization').split(' ')[1];
    let decodedToken;

    try{

        decodedToken = jwt.verify(token, 'superlongreallylongstringofstrings');
    }
    catch (error) {

        error.status = 500;
        error.message = 'Not Authenticated.'
        throw error;
    }

    if(!decodedToken){

        const error = new Error('Not Authenticated.');
        error.status = 500;
        throw error;
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
