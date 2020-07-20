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
  burger.create({ name: req.body.name, devoured: req.body.devoured }, (result) => {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

// put route to UPDATE the devoured status of a burger
router.put("/api/burgers/:id", (req, res) => {
  const condition = { id: req.params.id };
  const update = { devoured: req.body.value };

  burger.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were affected, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
