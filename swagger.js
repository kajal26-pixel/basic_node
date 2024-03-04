const swaggerAuto = require('swagger-autogen')()

const outputFile='./swagger_output.json'
const input=['./endpoints']

swaggerAuto(outputFile,input).then(()=>{
    require('./index.js')
})