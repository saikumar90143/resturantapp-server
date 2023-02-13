import express from 'express'
import ItemController from "../ItemControllers/ItemController.js";
import uploadOptions from '../uploadfile/File.js';

const router=express.Router()
// create menu
router.post('/createitem',uploadOptions.single('image'),ItemController.CreateMenu)

// Get Full Menu
router.get('/allitems',ItemController.GetFullMenu)

// get item by query
router.get('/items',ItemController.GetQueryItem)



// getitem by id
router.get('/singleitem/:id',ItemController.GetItemById)



export default router