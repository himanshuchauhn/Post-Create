const express = require("express");
const multer = require('multer');
const uploadFile = require("./services/storage.services");
const postModel  = require("./models/post.models")
const cors = require("cors")

const upload = multer({storage: multer.memoryStorage()})

const app = express();
app.use(cors())
app.use(express.json());

app.post("/create-post", upload.single("image"), async(req, res) => {
    console.log(req.body)
    console.log(req.file)
    
    const result = await uploadFile(req.file.buffer)
    //console.log(result);
    const post = await postModel.create ({
        image: result.url,
        caption: req.body.caption

    })
    return res.status(201).json({
        message:"Post Created",
        post
    })

}) 

app.get("/posts", async (req,res) =>{
    const posts = await postModel.find()
    return res.status(200).json({
        message:"Posts Fetched Successfully",
        posts
    })
})
module.exports = app