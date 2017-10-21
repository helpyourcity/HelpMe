const passport = require('passport');
const User = require('../models').User;
const config = require('../config/config.json');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt');

comparePassword = function(dbPassword, userPassword, callback){
    bcrypt.compare(dbPassword, userPassword, function(err, isMatch){
        console.log("this.pasword",dbPassword, userPassword)
      if(err){ return callback(err);}
  console.log("MATCH", isMatch)
      callback(null, isMatch);
    });
  }


//create local strategy 
const localOptions = {usernameField: 'email'}

const localLogin = new LocalStrategy(localOptions, function(email, password, done){
    console.log('is passport working?',password)
    User.findOne({
        where:{
          email:email
        }
      }).then((user) =>{
        console.log('user in local Strategy', user.password)
        comparePassword(password, user.password, function(err, isMatch){
            if(err){
                console.log('shits cray')
                return done(err);
              }
            if(!isMatch) { return done(null,false);}

            return done(null,user)
            })

        })
        .catch((err) => {
            console.log('we found this', err)
            return done(null, false, {message: 'Incorrect'})
          });
      
    });


//Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
    
};


// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
    console.log('payload', payload.sub)
    User.findById(payload.sub)
    .then((user) => {
        return done(null, user)
    })
    .catch((err) => {
        return done(null, false)
    })
});

//Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin)