const express = require('express');
const {generatenewshortURL} = require("../controllers/url");
const router = express.Router();

router.post("/" , generatenewshortURL);


module.exports = router;

