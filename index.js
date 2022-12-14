const Joi=require('joi');
const express=require('express');
const authroute=require("./route/authroute")
const mongoose=require('mongoose')


const app=express();

app.use(express.json());
app.use("/auth",authroute)

const courses=[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'}
];


app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

// app.post('/api/courses',(req,res)=>{
//     const { error }=validateCourse(req.body);
//     if(error)
//         return res.status(400).send(error.details[0].message);

//     const course={
//         id:courses.length+1,
//         name:req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });

app.put('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) 
    return res.status(404).send('The course with the given ID was not found');
    
    const { error }=validateCourse(req.body);
    if(error)
        return res.status(400).send(error.details[0].message);
    
    course.name=req.body.name;
    res.send(course);
});


app.delete('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found');

    const index=courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);

});

function validateCourse(course){
    const schema={
        name:Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}

app.get('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found');
    res.send(course);
})

const port=process.env.PORT || 3000;

mongoose.connect('mongodb+srv://Janhvi:WdHxVKLgTUDHTVmx@cluster0.enoylb2.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log("Connected to database")
    app.listen(port,()=> console.log(`Listening to port ${port}...`));
});

