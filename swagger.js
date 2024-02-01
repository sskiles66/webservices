const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'Contacts',
      description: 'Description',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};
  
const outputFile = './swagger.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)