import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/temp');
    },
    filename: function(req, file, cb){
        const storingFileName = file.originalname+ '-'+Date.now();

        cb(null, storingFileName);
    },
});

export const upload = multer.upload({storage: storage});