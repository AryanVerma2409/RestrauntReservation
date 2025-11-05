import app from "./app.js";
app.listen(process.env.PORT, ()=>{
    console.log(`Server Runnning on Port  ${process.env.PORT}`);
});

