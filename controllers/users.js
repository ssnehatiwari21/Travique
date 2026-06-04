const User = require("../models/user");

module.exports.renderSignupForm=(req,res)=>{
  res.render("users/signup.ejs");
};
module.exports.renderLoginForm=(req,res)=>{
  res.render("users/login.ejs");
};
module.exports.signup=async (req,res)=>{
  try{
    let {email,username,password}=req.body;
    const newUser=new User({email,username});
    const registeredUser=await User.register(newUser,password);
    req.login(registeredUser,err=>{
      if(err){
        return next(err);
      }
      req.flash("success","Welcome to Travique!");
      res.redirect("/listings");  
    });
  } catch (error) {
    req.flash("error",error.message);
    console.log(error);
    res.redirect("/signup");
    
  }
};

module.exports.login=async (req,res)=>{
  req.flash("success","Welcome back!");
  res.redirect(res.locals.redirectUrl || "/listings");
};

module.exports.logout=(req,res,next)=>{
  req.logout((err)=>{
    if(err){
      return next(err);
    }
    req.flash("success","Successfully logged out!");
    res.redirect("/listings");
  });
};

module.exports.renderProfile=(req,res)=>{
  res.render("users/profile.ejs",{user: req.user});
};

module.exports.renderEditProfile=(req,res)=>{
  res.render("users/edit.ejs",{user: req.user});
};

module.exports.updateProfile=async (req,res)=>{
  const { username, email } = req.body.user;
  const id = req.user._id;
  await User.findByIdAndUpdate(id, { username, email });
  req.flash("success","Profile updated successfully!");
  res.redirect('/profile');
};