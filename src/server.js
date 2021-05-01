const hapi = require('@hapi/hapi')
const routes = require('./routes')

const drin = async () => {
  const server = hapi.server({
    host: 'localhost',
    port: 3000
  })

  server.route(routes)

  await server.start()
  console.log(`server running at ${server.info.uri}`)
}

process.on('unhandledRejection', (error) => {
  console.log(error.message)
  process.exit(1)
})
drin()
