// const {response} = require('express')
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = "MyNameIsPreetBankimBhavnaAnam#$@";

router.post(
  "/creatuser",
  body("email").isEmail(),
  // password must be at least 5 chars long
  body("name").isLength({ min: 3 }),
  body("password", "Password should be minimum 5 characters").isLength({
    min: 5,
  }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);

    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password", "Password should be minimum 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let email = req.body.email;

    try {
      let uData = await User.findOne({ email });
      if (!uData) {
        return res.status(400).json({ errors: "Enter valid email" });
      }
      const pCompare = bcrypt.compare(req.body.password, uData.password);

      if (!pCompare) {
        return res.status(400).json({ errors: "Enter valid password" });
      }

      const data = {
        user: {
          id: uData.id,
        },
      };
      const authToken = jwt.sign(data, jwtSecret);

      return res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
