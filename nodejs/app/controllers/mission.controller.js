const { Router } = require("express");
const db = require("../models");
const Mission = db.cruds;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    const mission = new Mission({
        title: req.body.title,
        description : req.body.description,
        published: req.body.published ? req.body.published : false,
        done : req.body.done ? req.body.done : false
    })
    mission
    .save(mission)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Mission.find(condition)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving tutorials."
        });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Mission.findById(id)
  .then(data =>{
    data.done = true;
    data.save(data)
    .then(data => {
      res.send(data);
    })
  })
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Mission.findByIdAndRemove(id)
  .then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
      });
    } else {
      res.send({
        message: "Tutorial was deleted successfully!"
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Tutorial with id=" + id
    });
  });
};
