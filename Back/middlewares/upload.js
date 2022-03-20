const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination:'../auth-front/public/uploads',
    filename:function(req,file,cb){
        cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({
    storage:storage,
    limits:{
        fileSize:10000000
    },
    fileFilter:function(req, file, cb){
        const fileTypes=/jpeg|jpg|png/i
        mimeType=fileTypes.test(file.mimetype)
        if(mimeType){
            cb(null, true)
        }else{
            cb(null,false)
        }
    }
})

module.exports=upload