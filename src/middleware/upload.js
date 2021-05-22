const util = require('util');
const multer = require('multer');
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage');
const mongoose = require('mongoose')
const crypto = require('crypto')
const path = require('path');

const mongoURI = 'mongodb://127.0.0.1:27017/tylerhelm';

const promise = mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const conn = mongoose.connection;
let gfs;

conn.once('open', () => {
  gfs = Grid(conn, mongoose.mongo);
  gfs.collection('uploads');
});

//create storage object
const storage = new GridFsStorage({
  db: promise,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }

        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
          metadata: req.body
        };
        resolve(fileInfo);
      });
    });
  }
});

const uploadFile = multer({ storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFile);
module.exports = uploadFilesMiddleware;