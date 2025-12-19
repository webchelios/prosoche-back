import { envs } from "./config/envs"
import { AppRouter } from "./presentation/server/router/app-router"

import { ServerApp } from "./presentation/server/server-app"

(async () => {
    await start()
})()

async function start() {
    const server = new ServerApp(
        envs.PORT,
        AppRouter.routes(),
    )

    server.init()
}