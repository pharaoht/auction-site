const multer = require('multer');
const FileUploadClass = require('../util/uploads/file_uploads');

exports.multerMiddleWare = (req, res, next) => {

    const fileStorage = FileUploadClass.fileStorage();
    const fileFilter = FileUploadClass.fileFilter();

    multer({storage:fileStorage, fileFilter:fileFilter}).single('image');

    next();
};