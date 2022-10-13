const user=require('../model/user')

const getuser=(req,res)=>{
    res.send("Hello I'm Janhvi")
}

const signup=async(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const USER=new user({
        name:name,
        email:email,
        password:password
    })
    await USER.save()
    res.json('user created')
}

module.exports={getuser,signup}
