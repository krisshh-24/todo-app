const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sagarkrish2408:Helpmegod%401234@cluster0.zh1eej4.mongodb.net/');

const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoschema)
module.exports={
    todo
}