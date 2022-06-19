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

        if (!user){
            const error = {};
            error.message = 'The information we have recieved does not match our records. Please try again.';
            error.status = 401;
            return res.status(error.status).json({result:error.message});
        };

        //check if user is activated
        if( userInfo.isActive === 0 ){
            const message = 'You need to activate your account. We have sent you an email.';
            return res.status(200).json({result: message});
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
                    user_name:userInfo.user_name,
                    isAdmin:userInfo.isAdmin
                }, 'superlongreallylongstringofstrings', {expiresIn: '1h'});

                delete userInfo.password;

                return res.status(200).json({token:token, userId: userInfo.id, user:userInfo});
            };
        })
        .catch(error => {
            error.message = 'The information we have recieved does not match our records. Please try again.';
            error.status = 401;
            return res.status(error.status).json({result:error.message});
        });
    })
    .catch(error => {
        error.message = 'The information we have recieved does not match our records. Please try again.';
        error.status = 401;
        return res.status(error.status).json({result:error.message});
    })
};

exports.accountPasswordReset = (req, res, next) => {

    //find user

    //get email

    //send email

};

exports.accountActivation = (req, res, next) => {

    const userId = req.params.id;

    //find user
    User.activateUser(userId)
    .then(response => {
        const message = 'Your account is now active!'
        return res.status(200).json({result: message});
    })
    .catch(error => {
        error.message = 'Something went wrong, we could not verify your email.';
        return res.status(200).json({result: error.message});
    })
};