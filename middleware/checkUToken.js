require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/UserRegister");

// check user token and know if it s valid token of a valid user or not
const checkUToken = (req, res, next) => {
  const uToken = req.cookies.uToken;

  if (uToken) {
    // check if token is valid
    jwt.verify(uToken, process.env.JWT_U_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        // check if token uid is found in the user database
        const uId = decodedToken.id;
        const idExist = await User.findById(uId);

        if (idExist === null || !idExist) {
          res.locals.user = null;
          next();
        } else {
          // check for pages
          res.locals.user = idExist;
          next();
        }
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

// action after checing user token
const actionAfterCheckingUToken = (req, res, next) => {
  if (res.locals.user === null || !res.locals.user) {
    console.log("redirected");
    res.redirect("/");
  } else {
    next();
  }
};

module.exports = { checkUToken, actionAfterCheckingUToken };
