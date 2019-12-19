import * as express from 'express';
import { NextFunction, Response } from 'express';
import * as uuid from 'uuid/v4';

class Server {
    public api: express.Application;

    constructor() {
        this.api = express();
        this.routes();
    }

    private routes(): void {
        this.api.use('/**', Server.successResponse());
    }

    public static successResponse() {
        console.log('hello');
        return (req, res: Response) => {
            return res.status(200).json({ ResponseCode: 200, ResponseMessage: "OK", RequestID: uuid() });
        };
    };
}

const APIServer = new Server().api;

export { APIServer }