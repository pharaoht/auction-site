const multer = require('multer');

module.exports = class FileUploadClass{

    static fileStorage (){
        
        return multer.diskStorage({
            destination: (req, file, callback) => {
                callback(null, 'images')
            },

            filename: (req, file, callback) => {

                const date = new Date().toISOString();

                callback(null, date + '-' +file.originalname)
            }
        });
    };

    static fileFilter(req, file, callback){

        if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' ){
            callback(null, true)
        }
        else {
            callback(null, false)
        }
    };
}