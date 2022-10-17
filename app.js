import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 5000;
const app = express();

const middleware = (req, res, next) => {
    console.log("Yeni bir istek geldi.");
    next();
};

const mdlPost = (req, res, next) => {
    console.log("Post isteği için istek gönderildi.");
    next();
};


//Get 
app.get("/hello", middleware, (req, res) => {
   // console.log("Get isteği çalıştı.");
    res.json("Merhaba, GET isteği attınız.");

})

//Post
app.post("/hello", mdlPost, (req, res, next) => {
    //console.log("Post isteği çalıştı.");
    next();
    res.json("Merhaba, POST isteği attınız.");
})

//Put
app.put("/hello", middleware, (req, res) => {
    //console.log("Put isteği çalıştı.");
    res.json("Merhaba, PUT isteği attınız.");
})

//Delete
app.delete("/hello", middleware, (req, res) => {
    //console.log("Delete isteği çalıştı.");
    res.json("Merhaba, DELETE isteği attınız.");
})

app.use(middleware);

app.listen(PORT, () => {
    console.log(`Ready on http://localhost:${PORT}`);
});