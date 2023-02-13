import mongoose from "mongoose";

const ItemSchema=mongoose.Schema({
    name:{
        type:String,
     
    },
    price:{
        type:Number,
       
    },
    description:{
        type:String,
       
    },
    image:{
     type:String,
     
        
    },
    type:{
        type:String,
        
    },
    featured:{
        type:Boolean
    }

},{timestamps:true})


const ItemModel=new mongoose.model("Menu",ItemSchema)

export default ItemModel