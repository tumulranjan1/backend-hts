const User = require("../models/authModel");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);

  // 1) Check if email and password exist
  if (!email || !password) {
    res.status(400).json({
      status: "failed",
      message: "Please provide email and password!",
    });
    return;
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    res.status(401).json({
      status: "failed",
      message: "Incorrect email or password",
    });
    return;
  }

  res.status(200).json({
    status: "success",
    flag: "mY_p2S5",
  });
};

exports.saveName = (req, res, next) => {
  try {
    res.status(200).json({
      status: "success",
      data: `<div>"${req.body.name}"</div>`,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};
