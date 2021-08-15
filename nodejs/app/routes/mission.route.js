module.exports = app => {
    const missions = require("../controllers/mission.controller.js");

    var router = require("express").Router();

    router.post("/", missions.create);

    router.get("/", missions.findAll);

    router.put("/:id", missions.update);

    router.delete("/:id", missions.delete);

    app.use('/api/missions', router)
}