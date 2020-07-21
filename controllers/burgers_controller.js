const express = require("express");

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

const router = express.Router();

// get route to retrieve ALL burgers
router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      //maybe singular burger...we'll see
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//post route to create a NEW burger
router.post("/api/burgers", (req, res) => {
  burger.create([req.body.name], (result) => {
    // Send back the ID of the new burger
    res.json(result);
    console.log(result);
  });
});

// put route to UPDATE the devoured status of a burger
router.put("/api/burgers/:id", (req, res) => {
  const condition = req.params.id;
  const update = req.body.value;

  burger.update(update, condition, (result) => {
    if (err) {
throw err}
    res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
