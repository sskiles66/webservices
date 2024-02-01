const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'Contacts',
      description: 'Description',
    },
    host: 'https://webservices-stls.onrender.com',
    schemes: ['https'],
};
  
const outputFile = './swagger.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)