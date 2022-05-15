module.exports = class UserValidator {

    static verifyFirstName(firstName){

        const errors = {};

        if(firstName === ''){
            errors.empty = 'You must provide a First Name in order to create an account.'
            return errors;
        };

        if(firstName.length < 3){
            errors.firstNameMinLength = 'You must provide a First Name with at least 3 characters.'
        };

        if(firstName.length > 255){
            errors.firstNameMaxLength = 'You must provide a First Name that is no more than 255 characters.'
        };

        if(Object.keys(errors) === 0){
            return false;
        };

        return errors;
        
    };

    static verifyLastName(lastName){
        
        const errors = {};

        if(lastName === ''){
            errors.empty = 'You must provide a Last Name in order to create an account.'
            return errors;
        };

        if(lastName.length < 3){
            errors.lastNameMinLength = 'You must provide a Last Name with at least 3 characters.'
        };

        if(lastName.length > 255){
            errors.lastNameMaxLength = 'You must provide a Last Name that is no more than 255 characters.'
        };

        if(Object.keys(errors) === 0){
            return false;
        };

        return errors;
    };

    static verifyEmail(email){

        const errors = {};
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const isEmailValid = emailRegexp.test(email);
        
        if(email === ''){
            errors.emailLength = 'You must provide an Email address in order to create an account.'
            return errors;
        };

        if(!isEmailValid){
            errors.email = 'You must provide a valid Email address in order to create an account.'
            return errors;
        };

        return false;
    };

    static verifyPassword(password){

        const errors = {};
        const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,255}$/;
        const isPasswordValid = passwordRegex.test(password);

        if(password === ''){

            return errors.passwordExist = 'You must provide a Password in order to create an account.'
        };

        if(password.length < 6){

            errors.passwordLength = 'You must provide a Password with at least a length of 6 characters.'
        };

        if(password.search(/[a-z]/i) < 0){

            errors.passwordChar = 'You must provide a Password with at least 1 character.'
        }

        if(password.search(/[0-9]/) < 0){

            errors.passwordDigit = 'You must provide a Password with at least 1 digit.'
        }

        if(!isPasswordValid){

            errors.passwordSpecChar = 'You must provide a Password with at least 1 special character ex: !@#$%^&*_+-='
        }

        if(Object.keys(errors) === 0){
            return false;
        }

        return errors

    };

    static verifyUserAccount(userData){

        const errors = {};

        const firstNameValidator = this.verifyFirstName(userData.first_name);
        const lastNameValidator = this.verifyLastName(userData.last_name);
        const emailValidator = this.verifyEmail(userData.email);
        const passwordValidator = this.verifyPassword(userData.password);

        Object.keys(firstNameValidator).length > 0 ? errors.firstNameValidations = firstNameValidator : null;
        Object.keys(lastNameValidator).length > 0 ? errors.lastNameValidations = lastNameValidator : null;
        Object.keys(emailValidator).length > 0 ? errors.emailValidations = emailValidator : null;
        Object.keys(passwordValidator).length > 0 ? errors.passwordValidations = passwordValidator : null;

        return errors;

    };

}


    //     const userData = {
    //     firstName: 'Pt',
    //     lastName: 'lr',
    //     email: 'email',
    //     password: '12324',
    //     isActive:false,
    //     isAdmin: false,
    // 

  //  "first_name":"Tesr",
   // "last_name":"test",
   // "email":"email@ehail.com",
    //"password":"779088"