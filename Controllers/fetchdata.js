const celabrity = require('../Models/celabrity');
const asyncHandler = require('express-async-handler')

const createdata = asyncHandler(async(req,res) =>{
    const {name,occpation,catchPharse} = req.body;
    if(!name || !occpation ||!catchPharse){
        res.status(400)
        throw new Error('Please add all fields')
    }
    const data = await celabrity.create(name,occpation,catchPharse)
    if(data){
        res.status(201).json({
            data
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid user')
    }
})
const fetchdata = asyncHandler(async(req,res) =>{
    const data = await celabrity.find()
    if(data){
        res.status(200).json(data)
    }
    else{
        res.status(400)
        throw new Error("Invalid user")
    }
})
const updatedata = asyncHandler(async(req,res) =>{
    const updateddata = await celabrity.findByIdAndUpdate(req.param.id,req.body,{
        new:true,
    })
    if(data){
        res.status(200).json(data)
    }
})
const deletedata = asyncHandler(async(req,res) =>{
    const deleteddatadata = await celabrity.findByIdAndDelete(req.params.id)
    res.status(200).json({message : "deleted succesfully"})
})



module.exports = {
    createdata,
    fetchdata,
    updatedata,
    deletedata,
}