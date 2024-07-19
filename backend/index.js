const express=require("express");
const app=express();
const port=3000;
const { createtodo,updatetodo }=require("./types.js")
const { todo }=require("./db.js")
const cors=require("cors")
app.use(express.json({}));
app.use(cors())

app.post('/todo',async (req,res)=>{
    const createpayload=req.body;
    const parsedPayload=createtodo.safeParse(createpayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong input"
        })
        return;
    }
    await todo.create({
        title:createpayload.title,
        description:createpayload.description,
        completed:false
    })
    res.json({
        msg:"todo created"
    })
})

app.get('/todos',async (req,res)=>{
    const todos =await todo.find({})
    res.json({
        todos:todos
    })
})

app.put('/completed',async (req,res)=>{
    const updatePayload=req.body;
    const parsedPayload=updatetodo.safeParse(updatePayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg:"something is up with your input"
        })
        return;
    }else{
        await todo.update({
            _id:req.body.id
        },{
            completed:true
        })
        res.json({
            msg:"marked todo as completed"
        })
    }
})
app.listen(port)