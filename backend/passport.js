const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy=require('passport-github2').Strategy;
const FacebookStrategy=require('passport-facebook').Strategy;
const dotenv=require('dotenv').config();

const GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET=process.env.GOOGLE_CLIENT_SECRET
const GITHUB_CLIENT_ID=process.env.GITHUB_CLIENT_ID
const GITHUB_CLIENT_SECRET=process.env.GITHUB_CLIENT_SECRET
const FACEBOOK_CLIENT_ID=process.env.FACEBOOK_CLIENT_ID
const FACEBOOK_CLIENT_SECRET=process.env.FACEBOOK_CLIENT_SECRET

const passport=require('passport');


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {  
  //done instead of cb becz not using db here
  // profile contains authenticated user's google profile
  // FOR OUR DB  
  // User.findOrCreate({ googleId: profile.id }, function (err, user) {
  //   return cb(err, user);
  // });
    done(null,profile);
}));


passport.use(new GithubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {  
    done(null,profile);
}));

//domain required for fb;-
passport.use(new FacebookStrategy({
  clientID: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_CLIENT_SECRET,
  callbackURL: "/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {  
    done(null,profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});
  
passport.deserializeUser((user, done) => {
  done(null, user);
});

 