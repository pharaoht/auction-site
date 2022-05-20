const User = require("../../models/accounts");
const Util = require("../../util/util");
const Bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.accountLogin = (req, res, next) => {
    
    const email = req.body.email;
    const password = req.body.password;

    User.findUserByEmail(email)
    .then(([user, metaData]) => {
        const userInfo = user[0];

        if(!user){
            return Util.errorCatcher('The information we have recieved does not match our records. Please try again.', 401, null);
        };

        Bcrypt.compare(password, userInfo.password)
        .then(doMatch => {
            
            if(doMatch){
                const token = jwt.sign({
                    id: userInfo.id,
                    first_name: userInfo.first_name,
                    last_name: userInfo.last_name,
                    email: userInfo.email,
                    isActive: userInfo.isActive,
                    isAdmin:userInfo.isAdmin
                }, 'superlongreallylongstringofstrings', {expiresIn: '1h'})

                res.status(200).json({token:token, userId: userInfo.id, })
            };

            return Util.errorCatcher('The information we have recieved does not match our records. Please try again.', 401, null);
        })
        .catch(err => {
            console.log(err);
            return Util.errorCatcher('The information we have recieved does not match our records. Please try again.', 401, null);
        });

    })
    .catch(err => {
        console.log(err);
        return Util.errorCatcher('The information we have recieved does not match our records. Please try again.', 401, null);
    })

};

exports.accountLogOut = (req, res, next) => {

};

exports.accountPasswordReset = (req, res, next) => {

};

exports.accountActivation = (req, res, next) => {

};