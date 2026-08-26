const auth = (req,res,next)=>{
    console.log("login middleware...");
    res.cookie("user","debo07");
    next();
}

const status = true;

module.exports={auth,status};q