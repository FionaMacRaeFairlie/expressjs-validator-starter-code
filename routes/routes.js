const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("indexPage");
});

// let inputValidator = [
//     check("password", "Your password must be at least 5 characters")
//     .not()
//     .isEmpty()
//     .isLength({ min: 5 }),
//   check("classYear", "Class Year should be a number").not().isEmpty().isInt(),
//   check("weekday", "Choose a weekday")
//     .optional()
//     .not()
//     .isIn(["Sunday", "Saturday"]),
//   check("email", "Your email is not valid")
//     .not()
//     .isEmpty()
//     .isEmail()
//     .normalizeEmail(),
//   check("name")
//     .exists()
//     .isLength({ min: 5 })
//     .trim()
//     .escape()
//     .withMessage("Name must have more than 5 characters"),
//   // check("password", "Passwords do not match").custom(
//   //   (value, { req }) => value === req.body.password
//   // ),
// ];

let inputValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name should not be empty"),
  check("classYear", "Class Year should be a number").not().isEmpty(),
  check("weekday", "Choose a weekday").optional(),
  check("email", "Your email is not valid").not().isEmpty(),
  // check('email', 'Your email is not valid').not().isEmpty().isEmail().normalizeEmail(),
  check("password", "Your password should not be empty")
    .not()
    .isEmpty(),
    // check('name').exists().isLength({min: 5}).trim().escape().withMessage('Name must have more than 5 characters'),
    // check('confirmPassword', 'Passwords do not match').custom((value, {req}) => (value === req.body.password)),
];

router.post("/", inputValidator, function (req, res) {
  const result = validationResult(req);
  const errors = result.array();

  console.log(req.body.name)
  if (!result.isEmpty()) {
    res.render("indexPage", {
      errors: errors,
    });
  } else {
    res.render("nextPage");
  }
});

module.exports = router;
