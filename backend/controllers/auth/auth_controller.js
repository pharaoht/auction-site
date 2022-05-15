const User = require("../../models/accounts");
const Bcrypt = require('bcrypt');


exports.accountLogin = (req, res, next) => {
    
    const email = req.body.email;
    const password = req.body.password;

    User.findUserByEmail(email)
    .then(([user, metaData]) => {

        if(!user){
            res.status(400);
            return res.json({result:'Inncorrect Email or Password, Please try again.'})
        };

        Bcrypt.compare(password, user.password)
        .then(doMatch => {
            
            if(doMatch){
                req.session.isLoggedIn = true;
                req.session.user = user;
                return req.session.save(err => {
                    console.log(err);
                    res.status(200);
                    res.json({results:user})
                })
            };

            return res.json({results:'The Username or Password does not match our records. Please try again.'})
        })
        .catch(err => {
            console.log(err);
            res.status(400);
            return res.json({result:'Inncorrect Email or Password, Please try again.'})
        });

    })
    .catch(err => {
        console.log(err);
        res.status(400);
        res.json({result:'Inncorrect Email or Password, Please try again.'})
    })

};

exports.accountLogOut = (req, res, next) => {
    req.session.destory(err => {
        console.log(err);
        res.json({result:'Account successfully signed out.'})
    })
};

exports.accountPasswordReset = (req, res, next) => {

};

exports.accountActivation = (req, res, next) => {

};