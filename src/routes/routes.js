const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home-ctrl');
const uploadController = require('../controllers/upload-ctrl');
const displayController = require('../controllers/display-ctrl');

let routes = (app) => {
  router.get('/', homeController.getHome);
  router.post('/upload', uploadController.uploadFile);
  router.get('/images', displayController.displayImages);

  return app.use('/', router);
};

module.exports = routes;
