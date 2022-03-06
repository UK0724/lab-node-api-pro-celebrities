const mongoose =  require('mongoose')


const celabrityList = new mongoose.Schema({
    name : {
        type : String,
        required:true
    },
    occpation :{
        type : String,
    },
    catchPharse:{
        type : String
    }
})

module.exports = mongoose.model('celabrity',celabrityList)

