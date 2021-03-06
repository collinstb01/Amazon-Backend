const User = require("../model/auth.js");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const SECRET_KEY = "myKey";

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email: email });

  try {
    if (existingUser) {
      return res
        .status(400)
        .json({ message: " user already exist, Log in instead" });
    }
  } catch (error) {
    console.log(error);
  }

  try {
    const hashedPassword = bcrypt?.hashSync(password, 10);
    if (!existingUser) {
    const user = new User({
            name,
            password: hashedPassword,
            email,
    })
      await user.save();

      return res.status(200).json({user, message: "sign up sucessfull" });
    }
  } catch (error) {
    console.log({ message: error });
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return new Error(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "User not found. Signup Please" });
  }
  const isPasswordCorrect = bcrypt.compare(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Inavlid Email / Password" });
  }
  const token = jwt.sign({ id: existingUser._id }, SECRET_KEY, {
    expiresIn: "35s",
  });

  return res
    .status(200)
    .json({ message: "Successfully Logged In", user: existingUser, token });
}

const verifyToken = (req, next, res) => {
  const headers = req.headers["authorization"];
  const token = headers.split(" ")[1];

  if (!token) {
    res.status(404).json({ message: "Toeken doesnt exist" });
  }
  jwt.verify(String(token), SECRET_KEY, (err, user) => {
    if (err) {
     return res.status(404).json({ message: "Invalid Toeken" });
    }
    req.id = user.id
  });
  next();
};

// const getUser = async (req, res, next) => {
//     const {id} = req.params
//     let user;
//     try {
//       user = await User.findById(id, "-password");
//     } catch (err) {
//       return new Error(err);
//     }
//     if (!user) {
//       return res.status(404).json({ messsage: "User Not FOund" });
//     }  
//       return res.status(200).json({user})
// };

exports.signin = signin;
exports.signup = signup;
exports.verifyToken = verifyToken;

