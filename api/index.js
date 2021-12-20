// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true })

fastify.register(require("fastify-cors"), {})

// Declare a route
fastify.get("/ping", async (req, reply) => {
	reply.send({ [Date.now()]: process.env.DATABASE_URL })
})

// Run the server!
const start = async () => {
	try {
		await fastify.listen(process.env.API_PORT || 5000, "0.0.0.0")
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()
