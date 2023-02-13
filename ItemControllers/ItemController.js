import ItemModel from "../Models/ItemModel.js";



const CreateMenu=async(req,res)=>{
   try {
    const menu=req.body
       
   const basepath=`${req.protocol}://${req.get('host')}/uploads/`
   const filepath=req.file.filename
   const result=`${basepath}${filepath}`
      const newMenu=await new ItemModel({
       ...menu,
        
      })

      if(req.file){
         newMenu.image=result
      }
    await newMenu.save()
      res.status(200).json(newMenu)
   } catch (error) {
    res.status(404).json({message:"somthing wrong"})

   }
}

// get all menu

const GetFullMenu=async(req,res)=>{
   try {
       const FullMenu=await ItemModel.find().sort({name:1})
       
       res.status(200).json(FullMenu)
   } catch (error) {
      res.status(404).json({message:"somthing wrong"})
   }
}

// get item by id

const GetItemById=async(req,res)=>{
   
    try {
       const GetSingleItem=await ItemModel.findById(req.params.id)
       res.status(200).json(GetSingleItem)
    } catch (error) {
      res.status(400).json({message:"item not found"})
    }
}

// get Item by Query

const GetQueryItem=async(req,res)=>{
    
   try {
       const result=await ItemModel.find(req.query)
       if(!result)return res.status(400).json({message:"no item found for this input"})
       res.status(200).json(result)
   } catch (error) {
      res.status(400).json({message:"something wrong"})
   }
}


const MenuController={CreateMenu,GetFullMenu,GetQueryItem,GetItemById}

export default MenuController