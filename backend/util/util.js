module.exports = class Util {

    static errorCatcher(message, statusCode, data){
        const error = new Error(message);
        error.status = statusCode;
        error.data = data;
        throw error;
    };

    static jsonCatcher(message, statusCode, data){
        
    };
}