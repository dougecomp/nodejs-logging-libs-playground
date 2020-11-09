const express = require('express')
const pino = require('pino')
const pinoLogger = pino({
  name: 'Application Logger',
  prettyPrint: {
    colorize: true,
    ignore: "hostname",
    translateTime: true,
  },
})

const app = express()

app.get('/', (req, res) => {
  pinoLogger.error('Hello!')
  return res.send('An error has ocurred!')
})

pinoLogger.

app.listen(3333, () => {
  pinoLogger.info('Server started')
})