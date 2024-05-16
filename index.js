const express=require('express')
const userModel = require('./app')

const app=express()
const port =3000;


//Create a userDetails... 
app.get('/create',async (req,res)=>{
let userDetails= await userModel.create(
   {
  
    name: "Harry Potter and the Order of the Phoenix",
    img: "https://bit.ly/2IcnSwz",
    summary: `Harry Potter and Dumbledore's warning about the return of
              Lord Voldemort is not heeded by the wizard authorities who, in turn, look to
              undermine Dumbledore's authority at Hogwarts and discredit Harry.`
    
   },
   {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    img: "https://bit.ly/2tC1Lcg",
    summary: `"A young hobbit, Frodo, who has found the One Ring that
              belongs to the Dark Lord Sauron, begins his journey with eight companions to
              Mount Doom, the only place where it can be destroyed.`
    },
    {
    name: "Avengers: Endgame",
    img: "https://bit.ly/2Pzczlb",
    summary: `Adrift in space with no food or water, Tony Stark sends a
              message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the
              remaining Avengers -- Thor, Black Widow, Captain America, and Bruce Banner --
              must figure out a way to bring back their vanquished allies for an epic showdown
              with Thanos -- the evil demigod who decimated the planet and the universe.`
    
  

});
  res.send(userDetails)
});

// Read user details all details in list name:Avengers:Endgame
app.get('/read',async (req,res)=>{
  let read = await userModel.find({name: "Avengers: Endgame"});
  res.send(read)
 
  
  })

  // Read user details single details in list name:Avengers:Endgame

  app.get('/readsingle',async (req,res)=>{
    let read = await userModel.findOne({name: "Avengers: Endgame"});
    res.send(read)
   
    
    })

// update userdetail in list 

app.get('/update',async (req,res)=>{
   let update= await userModel.findOneAndUpdate({name:"Avengers: Endgame"},{name:"Avengers:Endgame_2"},{new:true})
   res.send(update);
  
  })


// Delete userdetails in list  
  app.get('/delete',async (req,res)=>{
    let read = await userModel.findOneAndDelete({name:"Avengers:Endgame_2"});
    res.send("Your details have been successfully deleted...!")
   
    
  })

app.listen(port);

