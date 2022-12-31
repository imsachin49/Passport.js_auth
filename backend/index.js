const cookieSession=require('cookie-session');
const express=require('express');
const app=express();
const cors=require('cors');
const port=5000;
const passport=require('passport');
const passportSetUp=require('./passport');
const authRoutes=require('./routes/auth');
const dotenv=require('dotenv');

dotenv.config();
app.use(cookieSession({name:"session",keys:["sachin_kumar"],maxAge: 24*60*60*100})); //keys->.env & maxAge=1day

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    "origin":"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
}))

app.use('/auth',authRoutes);

app.listen(port,()=>{
    console.log(`Listenin to port ${port}`);
})
