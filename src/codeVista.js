const fs=require('fs');

const { exec } = require("child_process");

const path=require("path");

const express=require('express');

const jwt=require('jsonwebtoken');

const mongoose=require('mongoose');

const app=express();

var bodyParser = require('body-parser')

app.use(bodyParser.json());

const secretKey="CodeVista.js"

const uri='mongodb+srv://aditya72:aEsXVBjygMImGlXm@cluster0.djuiozu.mongodb.net/';

const hackthonsarray=[];

const newsarray=[];

const researcharray=[];

function message(){
    console.log("listening at port 3000")
}

mongoose.set('strictQuery', true);

mongoose.connect(uri);

const adminSchema=new mongoose.Schema({
    Username: String,
    Password: String,
});

const userSchema=new mongoose.Schema({
    Username:String,
    Password: String,
});

const hackthonSchema=new mongoose.Schema({
    Title:String,
    Description:String,
    PostDate:Date,
    EndDate:Date,//deadline
    RegistrationLink:String,
});
const newsSchema=new mongoose.Schema({
    Title:String,
    Description:String,
    PostDate:Date,
    completeLink:String,

});
const researchSchema=new mongoose.Schema({
    Title:String,
    Description:String,
    PublishDate:Date,
    documentLink:String,
});
const User = mongoose.model('USER', userSchema);

const Admin = mongoose.model('ADMIN', adminSchema);

const Hackthon=mongoose.model("HACKTHON",hackthonSchema);

const Research=mongoose.model("RESEARCH",researchSchema);

const News=mongoose.model("NEWS",newsSchema);


function DeleteInstance(filename){
    fs.unlink(filename,(err)=>{
        if(err) console.log(err);
        else{
            console.log("Files deleted successfully");
        }
    });
}
function Delete2FileInstance(filename,executable){
    fs.unlink(filename,(err)=>{
        if(err) console.log(err);
        else{
            console.log("Files deleted successfully");
        }
    });
    
    fs.unlink(executable,(err)=>{
        if(err) console.log(err);
        else{
            console.log("Files deleted successfully");
        }
    });
}


const authenticate=(req,res,next)=>{//middle ware to authenticate the user or admin
    const authorization=req.headers.authorization;
    if(authorization){
        const token=authorization.split(' ')[1];
        jwt.verify(token,secretKey,(err,data)=>{
            if(err){
                res.status(404).json({message:"Authorization failed"});
            }
            Admin.findOne({ Username:data.username }).then((admin)=>{
                if(admin.Password==data.password){
                    next();
                }
            });
        });
    }
    else{
        res.status(401);
    }
};

function pythonVerify(lang,usr,fn){
    const fileName=usr+".py";
    const prog=fn;
    fs.writeFile(fileName,prog,(err)=>{
        console.log(err);
    });
    const command="python3 "+fileName
    exec(command,(error,stdout,stderr)=>{
        
    });
    DeleteInstance(lang,usr)
}

function javaVerify(lang,usr,fn){
    const fileName=usr+".java";
    const prog=fn;
    fs.writeFile(fileName,prog,{encoding:"utf8"},(err)=>{
        console.log(err);
    });
    const command1="javac "+fileName
    exec(command1,(error,stdout,stderr)=>{
        const command2="java "+fileName
        exec(command2,(error,stdout,stderr)=>{
            if (stdout)return stdout;
            else if(stderr) return stderr;
        });
    });
    const executable=usr+".class";
    Delete2FileInstance(fileName,executable)
}
function cVerify(lang,usr,fn){
    const fileName=usr+".c";
    const prog=fn;
    fs.writeFile(fileName,prog,(err)=>{
    });
    const command0="echo PATH$"
    exec(command0,(error,stdout,stderr)=>{
        const command1="gcc "+fileName+" -o "+usr
        exec(command1,(error,stdout,stderr)=>{
            const executable=usr+".exe"
            const command2=".\\"+executable
            exec(command2,(error,stdout,stderr)=>{
                if (stdout)return stdout;
                else if(stderr) return stderr;
            });
        });
    });
    Delete2FileInstance(filename,executable)
}
function jsVerify(lang,usr,fn){
    const fileName=usr+".js";
    const prog=fn;
    fs.writeFile(fileName,prog,(err)=>{
    });
    const command0="node "+fileName;
    exec(command0,(error,stdout,stderr)=>{
        if (stdout)return stdout;
        else if(stderr) return stderr;
    });
    DeleteInstance(lang,usr)
}
function cppVerify(lang,usr,fn){
    const fileName=usr+".cpp";
    const prog=fn;
    fs.writeFile(fileName,prog,(err)=>{
    });
    const command0="echo PATH$"
    exec(command0,(error,stdout,stderr)=>{
        const command1="g++ "+fileName+" -o "+usr
        exec(command1,(error,stdout,stderr)=>{
            const executable=usr+".exe"
            const command2=".\\"+executable
            exec(command2,(error,stdout,stderr)=>{
                if (stdout)return stdout;
                else if(stderr) return stderr;
            });
        });
    });
    Delete2FileInstance(fileName,executable)
}


//admin routes

app.post("/admins/signup",authenticate,(req,res)=>{//allows the admin to signup
    const username=req.body.username;
    const password=req.body.password;
    console.log(username)
    Admin
    .findOne({ username })
    .then((admin)=>{
        if(admin!==null){
            console.log(admin);
            res.status(403).json({ message: 'Admin already exists' });
        }
        else{
            const obj = { Username: username, Password: password };
            const newAdmin = new Admin(obj);
            newAdmin.save();
            const token = jwt.sign({ username, role: 'admin' }, secretKey, { expiresIn: '1h' });
            res.json({ message: 'Admin created successfully', token });
        }
    });    
});

app.post("/admins/login",authenticate,(req,res)=>{//allows the admin to login
    const username=req.body.username;
    const password=req.body.password;
    Admin.findOne({username}).then((admin)=>{
        if(admin.Password===password){
            const token = jwt.sign({ username, role: 'admin' }, secretKey, { expiresIn: '1h' });
            res.json({ message: 'Admin Logged in successfully', token: token });
        }
        else{
            res.status(403).json({message: 'Incorrect password'});
        }
    });
});

app.post("/admins/postHackthon",authenticate,(req,res)=>{//post a new hackthon tab
    const details=req.body;
    const newHackthon=new Hackthon(details);
    newHackthon.save();
    res.status(200).send(JSON.stringify(newHackthon));
});

app.post("/admins/postNews",authenticate,(req,res)=>{//post a new News tab
    const details=req.body;
    const newNews=new News(details);
    newHackthon.save();
    res.status(200).send(JSON.stringify(newHackthon));
});

app.post("/admins/postResearch",authenticate,(req,res)=>{//post a new research tab
    const details=req.body;
    const newResearch=new Research(details);
    newHackthon.save();
    res.status(200).send(JSON.stringify(newHackthon));
});

//user routes

app.post("/users/signup",(req,res)=>{//allows the user to signup
    const {username,password}=req.body;
    User.findOne({ username }).then((user)=>{
        console.log(user);
        if(user){
            res.status(403).json({ message: 'User already exists' });
        }
        else{
            const obj = { username: username, password: password };
            const newUser = new User(obj);
            newUser.save();
            const token = jwt.sign({ username, role: 'user' }, secretKey, { expiresIn: '1h' });
            res.json({ message: 'user created successfully', token });
        }
    });
});


app.post("/users/login",(res,req)=>{//allows the user to login
    const {username,password}=req.body;
    User.findOne({username}).then((user)=>{
        if(user&&user.password===password){
            const token = jwt.sign({ username, role: 'user' }, secretKey, { expiresIn: '1h' });
            res.json({ message: 'user Logged in successfully', token: token });
        }
        else{
            res.status(403).json({message: 'Incorrect password'});
        }
    });
});

app.get("/users/hackthon",authenticate,(req,res)=>{//returns all the hackthon events hapenning
    const hackthonsArray=[];
    Hackthon.forEach((hackthon)=>{
        hackthonsArray.push(hackthon);
    });
    res.status(200).json(hackthonsArray);
});
app.get("/users/news",authenticate,(req,res)=>{//return all the latest news(all the news)
    const newsArray=[];
    News.forEach((news)=>{
        newsArray.push(news);
    });
    res.status(200).json(hackthonsArray);
});
app.get("/users/research",authenticate,(req,res)=>{//returns all the research updates
    const researchArray=[];
    Hackthon.forEach((hackthon)=>{
        hackthonsArray.push(hackthon);
    });
    res.status(200).json(hackthonsArray);
});
app.post("/users/attend",(req,res)=>{//allows user to compile their code
    const package=req.body;
    const language=package.language
    switch (language){
        case 1:
            res.send(pythonVerify(language,package.username,package.program));            
            break;
        case 2:
            res.send(javaVerify(language,package.username,package.program));
            break;
        case 3:
            res.send(JsVerify(language,package.username,package.program));
            break;
        case 4:
            res.send(cVerify(language,package.username,package.program));
            break;
        case 5:
            res.send(cppVerify(language,package.username,package.program));
            break;
    }
});
app.listen(3000,message);