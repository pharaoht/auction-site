module.exports = class Util {

    static errorCatcher(message, statusCode, data){
        const error = new Error(message);
        error.status = statusCode;
        error.data = data;
        throw error;
    };

    static dateFormater(userInputDate){

        if(!userInputDate) {
            const today = new Date();
            const year = today.getFullYear();
            let month = today.getMonth() + 1;
            let day = today.getDay();
            
            if (day < 10) day = `0${day}`;
            if (month < 10 ) month = `0${month}`;
    
            const date = `${year}-${month}-${day} 00:00:00`;
    
            return date;
        }
        else {
            
        }
    };
}