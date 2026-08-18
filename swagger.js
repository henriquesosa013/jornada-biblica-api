import swaggerAutogen from 'swagger-autogen'

const doc = {
  info: { 
    title: 'Jornada Bíblica API', 
    description: 'API do jogo'
  },
  host: 'localhost:3000'
}

const outputFile = './swagger.json'
const endpointsFiles = ['./index.js']

swaggerAutogen()(outputFile, endpointsFiles, doc);