import express, { Router } from "express";

export class ServerApp {

    private readonly app = express()

    constructor(
        private readonly port: number,
        private readonly router: Router
    ) { }

    public init() {

        this.app.use(this.router)

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
}