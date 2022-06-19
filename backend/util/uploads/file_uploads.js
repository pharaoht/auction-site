const multer = require('multer');

module.exports = class FileUploadClass{

    static fileStorage(){
        console.log('storage *********')
        return multer.diskStorage({

            destination: (req, file, callback) => {
                console.log('destination ************')
                callback(null, 'images');
            },

            filename: (req, file, callback) => {

                console.log(file)

                const date = new Date().toISOString().replace(/:/g, '-');

                callback(null, date + 'xx' + file.originalname);
            }
        })
    };

    static fileFilter(req, file, callback){

        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
            
            callback(null, true)
        }
        else {
            
            callback(null, false)
        }
    };
}