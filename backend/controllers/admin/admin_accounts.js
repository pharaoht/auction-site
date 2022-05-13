const User = require('../../models/accounts');
const UserValidator = require('../../validator/accountValidator');
const Bcrypt = require('bcrypt');

//controller for all admin access

exports.createNewAdminUser = (req, res, next) => {

    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        isActive:true,
        isAdmin: true,
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
        .then(response => res.json({result:'Your account has been created, You are now an Admin User'}))
        .catch(err => {
            res.status(400);
            res.json({result:err});
        });
    });

};