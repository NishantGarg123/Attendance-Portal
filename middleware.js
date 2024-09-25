module.exports.isLoggedIn = (req , res , next )=>{
    // console.log(req.user);    
   if(!req.isAuthenticated()){                  
       req.flash("error" , "You must be logged in to view the Dashboard");
       return res.redirect("/attendance/login");
   }next();
}