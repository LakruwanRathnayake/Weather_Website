const path = require('node:path');
const express=require('express');
const weather=require('./utils/weather');
const geo=require('./utils/geo');
const hbs=require('hbs');

const app=express();


//console.log(publicDirPath);
const templatePath = path.join(__dirname,"../templates");
const partialsPath = path.join(__dirname,"../templates/partials");
app.set('view engine', 'hbs');
app.set('views',templatePath);
hbs.registerPartials(partialsPath);
const publicDirPath =path.join(__dirname,"../public")

app.use(express.static(publicDirPath));

app.get('/',(req,res)=>{
  res.render('index');
})

app.get('/about',(req,res)=>{
  res.render('about')
});
app.get('/contact',(req,res)=>{
  res.render('contact')
});

app.get('/weather',(req,res)=>{
  if(!req.query.address){
    res.render({error:'address not found!'})
  }
 geo(req.query.address)
      .then((data)=>{
       return weather(data.lat,data.lon)
      })
      .then((data)=>{
       res.send(data)
      })
      .catch((error)=>{
        res.send(error);
      });
    });

      app.get('*',(req,res)=>{
        res.render('404')
      });

// weather(51.4875167,-0.1687007 )
//     .then((data)=>{
//       console.log(data);
//     })
//     .catch((error)=>{
//       console.log(error);
//     })

// 

app.listen(3000,()=>console.log('server is on port 3000'));
