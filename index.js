const express = require("express");

const routes = require("./routes/index");

const contactRoutes = require("./routes/contacts");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

const mongodb = require('./db/connect');

app.use(express.json());

app.use("/", routes);

app.use("/contacts", contactRoutes);

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3000;

mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
});