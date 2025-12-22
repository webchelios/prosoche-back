import { envs } from "./config/envs"
import { MongoDatabase } from "./data"
import { AppRouter } from "./presentation/app-router"

import { ServerApp } from "./presentation/server-app"

(async () => {
    await main()
})()

async function main() {
    await MongoDatabase.connect({
        dbName: envs.MONGO_DB_NAME,
        mongoUrl: envs.MONGO_URL,
    })

    const server = new ServerApp(
        envs.PORT,
        AppRouter.routes,
    )

    server.start()
}