const express = require("express");
const cors = require("cors");
const axiosLib = require('axios')

const axios = axiosLib.create({
  baseURL: "https://api.cryptowat.ch",
  headers: {
    "X-CW-API-Key": "6FY2KPR6X1U2XFHJO6ID",
  },
});

const app = express();
const router = express.Router()
const port = 3001;
app.use(cors())


router.use(async (req, res, next) => {
  const npath = req.url.replace(/\/api/g, "")
  const cryresp = await axios({
    method: req.method,
    url: npath,
  })
  return res.json(cryresp.data);
});

app.use('/api', router)


app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
