const multer = require('multer');
const FileUploadClass = require('../util/uploads/file_uploads');

exports.sendFile = (req, res, next) => {

    const fileStorage = FileUploadClass.fileStorage();
    
    const fileFilter = FileUploadClass.fileFilter();
    
    const upload = multer({storage:fileStorage, fileFilter:fileFilter});
    
    return upload.single('image')(req, res, () => {

        //check if file is valid
        if(!req.file) throw Error('File type is not valid. Please upload jpeg, jpg, or png only.')
        
        next();
    });
};