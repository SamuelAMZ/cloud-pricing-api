require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/UserRegister");

// check user token and know if it s valid token of a valid user or not
const checkUToken = (req, res, next) => {
  const uToken = req.cookies.uToken;

  if (uToken) {
    jwt.verify(uToken, process.env.JWT_U_SECRET, async (err, decodedToken) => {
      if (err) {
        res.status(400).json({ message: "token not valid", error: err });
        res.redirect(process.env.HOME);
        return;
      } else {
        // check if token id is found in the user database
        const uId = decodedToken.id;
        const idExist = await User.findOne({ uId });
        console.log(idExist);
        if (!idExist.id) {
          res.status(400).json({ message: "token not valid", error: err });
          res.redirect(process.env.HOME);
          return;
        } else {
          // check for pages
          next();
        }
      }
    });
  } else {
    res.redirect(process.env.HOME);
  }
};

module.exports = checkUToken;
