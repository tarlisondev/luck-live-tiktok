
const multer = require("multer");

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "./public/imgs");
    },
    filename: (req, file, cb) => {
        cb(null, file.filename = `${Date.now().toString()}.${file.originalname.split(".")[1]}`);
    }
})

const upload = multer({ storage: storage }).single("file")

module.exports = upload;

