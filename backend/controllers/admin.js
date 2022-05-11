const User = require('../models/users');
const UserValidator = require('../validator/accountValidator');


exports.getUsers = (req, res, next) => {
    
    //auth user
    User.fetchAllUsers(users => res.json({results:users}));
};

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

    


    const user = new User(null, first_name, last_name, email, password, isAdmin);
    //returns a promise
    user.createNewUser()
    .then(response => res.json({result:'Your account has been created'}))
    .catch(err => {
        res.status(400);
        res.json({result:err});
    });

};

exports.findUserById = (req, res, next) => {

    const id = req.body.id;

    User.findUserById(id)
    .then(([rows, metaData])=>res.json({results:rows}))
    .catch(err => {
        res.status(400);
        res.json({result:err});
    });
};

exports.testRoute = (req, res, next) => {
    console.log('test route');
    res.status(200)
    res.json({result:'Hello from the backend'})
}

 