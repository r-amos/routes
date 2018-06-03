const express = require("express");
const routeService = require("../../../services/routes");
const router = express.Router();
const { catchAsyncErrors } = require("../../../utility");
const multer = require("multer");
const upload = multer({ dest: "temp/" });
const togeojson = require("togeojson");
const fs = require("fs");
const DOMParser = require("xmldom").DOMParser;

router.get(
  "/",
  catchAsyncErrors(async (request, response) => {
    const routes = await routeService.getRoutes();
    return response.json(routes);
  })
);

router.get(
  "/:id",
  catchAsyncErrors(async (request, response) => {
    const route = await routeService.getRouteWithId(request.params.id);
    return response.json(route);
  })
);

// Apply Multer Middlware To Handle File Uploads
router.post(
  "/",
  upload.single("routeGpxFile"),
  catchAsyncErrors(async (request, response) => {
    const { file } = request;
    const text = request.body;
    // Convert GPX to geoJSON
    const gpx = new DOMParser().parseFromString(
      fs.readFileSync(file.path, "utf8")
    );
    const routeGeoJSON = togeojson.gpx(gpx);
    const route = await routeService.createNewRoute({
      ...text,
      routeGeoJSON
    });
    //Check Then Delete
    if (route) {
      fs.unlink(file.path, err => {
        if (err) throw err;
      });
    }
    return response.json(route);
  })
);

module.exports = router;
