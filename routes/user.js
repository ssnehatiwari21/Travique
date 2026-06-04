const express=require("express");
const router=express.Router();
const User=require("../models/user");
const wrapAsync=require("../utils/wrapAsync");
const ExpressError=require("../utils/ExpressError");
const { userSchema } = require("../schema");
const passport = require("passport");
const { isLoggedIn } = require("../middleware");
const {saveRedirectUrl} = require("../middleware");
const userController = require("../controllers/users");

const validateSignup = (req,res,next)=>{
  const { username, email } = req.body;
  const { error } = userSchema.validate({ username, email }, { abortEarly: false });
  if(error){
    const formErrors = {};
    error.details.forEach(el => {
      const field = el.path[0];
      formErrors[field] = el.message;
    });
    req.session.formErrors = formErrors;
    req.session.formValues = { username, email };
    req.flash("error","Please fix the highlighted fields.");
    return res.redirect('/signup');
  } else {
    next();
  }
}

const validateProfile = (req,res,next)=>{
  const { error } = userSchema.validate(req.body.user, { abortEarly: false });
  if(error){
    const formErrors = {};
    error.details.forEach(el => {
      const field = el.path[0];
      formErrors[field] = el.message;
    });
    req.session.formErrors = formErrors;
    req.session.formValues = req.body.user;
    req.flash("error","Please fix the highlighted fields.");
    return res.redirect('/profile/edit');
  } else {
    next();
  }
}

// SIGNUP ROUTES
router.route("/signup")
.get(userController.renderSignupForm)
.post(validateSignup, wrapAsync(userController.signup));

// LOGIN ROUTES
router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate("local", {
  failureRedirect: "/login",
  failureFlash: true
}), userController.login);

//LOGOUT ROUTE
router.get("/logout",userController.logout);

// PROFILE ROUTE
router.get("/profile", isLoggedIn, userController.renderProfile);

// EDIT PROFILE - form
router.get("/profile/edit", isLoggedIn, userController.renderEditProfile);

// UPDATE PROFILE
router.put("/profile", isLoggedIn, validateProfile, wrapAsync(userController.updateProfile));

module.exports=router;