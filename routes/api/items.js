const express = require("express");
const router = express.Router();

//Item model
const Item = require("../../models/Item");

// @route   GET api/items
// @desc    Get items
// @ccess   Public
router.get("/", (req, resp) => {
    Item.find()
        .sort({ date: -1})
        .then(items => resp.json(items))
});

// @route   POST api/items
// @desc    Create items
// @ccess   Public
router.post("/", (req, resp) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => resp.json(item));
});

// @route   DELETE api/items/:id
// @desc    delete items
// @ccess   Public
router.delete("/:id", (req, resp) => {
    Item.findById(req.params.id)
        .then(item => {item.remove()
        .then(() => resp.json({success: true}))
        })
        .catch(err => resp.status(404).json({success: false}))
});


module.exports = router;
