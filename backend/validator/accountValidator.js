
module.exports = class UserValidator {

    static verifyFirstName(firstName){

        const errors = {};

        if(firstName === ''){
            errors.empty = 'You must provide a First Name in order to create an account.'
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
            return errors.emailLength = 'You must provide an Email in order to create an account.'
        };

        if(!isEmailValid){
            return errors.email = 'You must provide an Email address in order to create an account.'
        };

        

    };

    static verifyPassword(password){

    };

    static verifyUserAccount(userData){

        const errors = {};

        const firstNameValidator = this.verifyFirstName(userData.firstName);
        const lastNameValidator = this.verifyLastName(userData.lastName);



        return errors;
    }
}

    // !first_name ? data.first_name = 'You must provide a First Name in order to create an account' : null;
    // !last_name ? data.last_name = 'You must provide a Last Name in order to create an account' :  null;
    // !email ? data.email = 'You must provide an email in order to create an account' : null;
    //cpode changfe