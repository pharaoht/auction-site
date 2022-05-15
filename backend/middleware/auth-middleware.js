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

exports.csrfMiddleWare = (req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
};