import multer from "multer";
import path from 'path'
// Create Menu

const storage=multer.diskStorage({
    destination: function(req,file,cb){
      
       cb(null,'./uploads')
    },
    filename:function(req,file,cb){
       cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

 const uploadOptions=multer({
   storage:storage,
   fileFilter:(req,file,cb)=>{
      if(file.mimetype=="image/png"|| file.mimetype=="image/jpeg"||file.mimetype=="image/jpg"){
         cb(null,true)
      } else{
         console.log("file not supported")
         cb(null,false)
      }
   }

})

export default uploadOptions