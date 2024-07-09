import fastity from "fastify"
import { prisma } from "./lib/prisma"
import { createTrip } from "./routes/create-trip"

const app = fastity()

app.register(createTrip)


app.listen({port: 3333}).then(() => {
    console.log("Server is running on port 3333")
})