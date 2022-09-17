const express = require("express");
const models = require("./models");
const app = express();

app.get("/",async function(req,res){
    console.log("On server");
})
app.get("/products", async (request, response) => {
    const Items = await models.find({});
  
    try {
      response.json({mongoData:Items});
      console.log(Items);
    } catch (error) {
      response.status(500).send(error);
    }
  });

module.exports = app;
    
