import express, { Router, urlencoded } from "express";

export class ServerApp {

    private readonly app = express()

    constructor(
        private readonly port: number,
        private readonly router: Router
    ) { }

    public start() {


        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))

        this.app.use(this.router)


        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
}