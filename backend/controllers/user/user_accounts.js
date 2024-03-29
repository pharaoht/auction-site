const User = require('../../models/accounts');
const UserValidator = require('../../validator/accountValidator');
const Bcrypt = require('bcrypt');
// const EmailSender = require('../../util/emails/email_sender');

//controller for all regular user access

exports.createNewUser = (req, res, next) => {

    const userData = {
        user_name: req.body.user_name,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        isActive:false,
        isAdmin: false,
    };

    console.log(req.body)

    const verifiedUserData = UserValidator.verifyUserAccount(userData);

    if(Object.keys(verifiedUserData).length > 0 ){
        res.status(400);
        return res.json({errors:verifiedUserData})
    };

    Bcrypt.hash(userData.password, 12)
    .then(hashedPassword => {

        const user = new User(null, userData.first_name, userData.last_name, userData.email, hashedPassword, userData.isActive, userData.isAdmin, userData.user_name);

        user.createNewUser()
        .then(response => {

            //send email
            const recipientObj = {

                email: userData.email,
                first_name: userData.first_name,
                last_name: userData.last_name,
                sender: 'email@email.com',
                activationLink: `http://localhost:4000/auth/activate/`
            };

            // EmailSender.activationEmail(recipientObj)

            res.status(200);
            res.json({result:'Your account has been created, Please check your email to activate your account.'})
        
        })
        .catch(err => {
            console.log(err)
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

    if(Object.keys(verifiedUserData).length > 0 ){
        res.status(400);
        return res.json({errors:verifiedUserData})
    };

    User.updateUserById(userData)
    .then(response => {
        //send email to let user know account has been updated
        res.status(200)
        res.json({result:'Your account has successfully been updated!'})
    })
    .catch(err => {
        console.log(err);
        res.status(400);
        res.json({error:err});
    })
};

exports.findUserById = (req, res, next) => {

    const userId = req.body.id;

    User.findUserById()
    .then(([rows, metaData]) => {
        res.status(200);
        res.json({results:rows});
    })
    .catch(err => {
        console.log(err);
        res.status(400);
        res.json({error:err});
    })
}