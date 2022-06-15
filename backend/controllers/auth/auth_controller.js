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
        console.log(userInfo)

        if (!user){
            const error = new Error('The information we have recieved does not match our records. Please try again.');
            error.status = 401;
            throw error;
        };

        //check if user is activated


        Bcrypt.compare(password, userInfo.password)
        .then(doMatch => {
            
            if(doMatch){
                const token = jwt.sign({
                    id: userInfo.id,
                    first_name: userInfo.first_name,
                    last_name: userInfo.last_name,
                    email: userInfo.email,
                    isActive: userInfo.isActive,
                    user_name:userInfo.user_name,
                    isAdmin:userInfo.isAdmin
                }, 'superlongreallylongstringofstrings', {expiresIn: '1h'})

                return res.status(200).json({token:token, userId: userInfo.id, user:userInfo});
            };

            const error = new Error();
            error.message = 'The information we have recieved does not match our records. Please try again.';
            error.status = 401;
            throw error;
        })
        .catch(error => {
            error.message = 'The information we have recieved does not match our records. Please try again.';
            error.status = 401;
            throw error;
        });
    })
    .catch(error => {
        error.message = 'The information we have recieved does not match our records. Please try again.';
        error.status = 401;
        throw error;
    })
};

exports.accountLogOut = (req, res, next) => {

};

exports.accountPasswordReset = (req, res, next) => {

};

exports.accountActivation = (req, res, next) => {

    const userId = req.params.id;

    //find user

    User.activateUser(userId)
    .then()
    .catch()
};