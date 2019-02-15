const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express();

const port = process.env.PORT || 5000;


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pos', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose opened!');
  var userSchema = new mongoose.Schema({
      name : String, 
      password:String
    }, 
    {collection: "accounts"}
    );
  var User = mongoose.model('accounts', userSchema);

  User.findOne({name:"WangEr"}, function(err, doc){
    // if(err) console.log(err);
    // else console.log(doc.name + ", password - " + doc.password);
    console.log("doc="+doc);
  });

  var lisi = new User({name:"LiSi", password:"123456"});
  lisi.save(function(err, doc){
    if(err)console.log(err);
    else console.log(doc.name + ' saved');
  });  
});


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log("next");
  next();
});

app.use((req, res, next) => {
  res.send('Welcome to Express');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});



