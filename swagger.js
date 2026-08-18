import swaggerAutogen from 'swagger-autogen'

const doc = {
  info: { 
    title: 'Jornada Bíblica API', 
    description: 'API do jogo'
  },
  host: 'jornada-biblica-api.onrender.com',
  schemes: ['https']
}

const outputFile = './swagger.json'
const endpointsFiles = ['./index.js']

swaggerAutogen()(outputFile, endpointsFiles, doc);