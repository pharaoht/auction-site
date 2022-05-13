const User = require('../../models/accounts');
const UserValidator = require('../../validator/accountValidator');
const Bcrypt = require('bcrypt');

//controller for all regular user access

exports.createNewUser = (req, res, next) => {

    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        isActive:false,
        isAdmin: false,
    };

    const verifiedUserData = UserValidator.verifyUserAccount(userData);

    if(Object.keys(verifiedUserData) > 0 ){
        res.status(400);
        return res.json({errors:verifiedUserData})
    };

    Bcrypt.hash(userData.password, 12)
    .then(hashedPassword => {

        const user = new User(null, userData.first_name, userData.last_name, userData.email, hashedPassword, userData.isActive, userData.isAdmin);

        user.createNewUser()
        .then(response => {
            //send email
            res.json({result:'Your account has been created, Please check your email to activate your account.'})
        
        })
        .catch(err => {
            res.status(400);
            res.json({result:err});
        });
    });
};

exports.deleteAccount = (req, res, next) => {
    //switch to req.params 
    const userId = req.body.id;

    User.deleteUserById(userId)
    .then( response => {
        res.status(200)
        res.json({result:'Your account has been successfully deleted!'})
    })
    .catch(err => {
        res.status(400)
        res.json({error:err});
    })

};

exports.updateUserInfo = (req, res, next) => {

    const userData = {
        userId: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        isActive:false,
        isAdmin: false,
    };

    const verifiedUserData = UserValidator.verifyUserAccount(userData);

    if(Object.keys(verifiedUserData) > 0 ){
        res.status(400);
        return res.json({errors:verifiedUserData})
    };

    User.updateUserById(userData)
    .then(response => {
        //send email to let user know account has been updated
        res.status(200)
        res.json({result:'Your account has successfully been updated!'})
    })
    .catch()
};