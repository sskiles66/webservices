const express = require("express");

const routes = require("./routes/index");

const app = express();

app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})