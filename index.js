const express = require('express')
const app = express();
const port = 6000;
const URL = require("./models/url");
const urlRoute = require("./routes/url");
const {connectTOmongoDb} = require("./db");


app.use(express.json());

app.use("/url",urlRoute);
connectTOmongoDb('mongodb://localhost:27017/short_url').then(()=> console.log("MongoDb connected"));

app.get('/:shortId', async(req,res)=> {
  const shortId = req.params.shortId;
  const entry= await URL.findOneAndUpdate({
    shortId
  })
res.redirect(entry.redirectURL)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})