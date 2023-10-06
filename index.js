
const express = require('express')
const mongoDbConnection= require('./Db')
mongoDbConnection()
const app = express()

app.use(express.json())
app.use('/api/product',require('./Router/ProdutRouter'));

app.get('/greeting',(req,res)=>{
    console.log("hello,your frist API as been called")
    res.send("This is frist API")
})
const port =4000;




app.listen(port,() => {
    console.log(`Server is on port ${port}`);

})