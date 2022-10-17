const express =require("express");
const app  = express();
const ck = require("ckey");
const userRouter = require("./api/users/user.router");
const movieRouter = require("./api/movie/movie.router");
const auditoriumRouter = require("./api/auditorium/auditorium.router");
const showsRouter = require("./api/shows/shows.router");

app.use(express.json());

app.use("/api/users",userRouter);
app.use("/api/movies",movieRouter);
app.use("/api/auditorium",auditoriumRouter);
app.use('/api/shows',showsRouter);

app.get("/api",(req,res)=>{
    res.json({
        success:1,
        message:"This is rest api is working"
    });
});

app.listen(ck.APP_PORT,()=>{
    console.log("Server is starting at the port number : ",ck.APP_PORT);
});