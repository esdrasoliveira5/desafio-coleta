import { ControllerInterface } from "../interface/ControllerInterface";
import { Request, Response } from 'express';
import Service from '../services/service';

class Controller implements ControllerInterface {
  constructor(public service = new Service()) {}

  create(req: Request, res: Response): Promise<typeof res> {
    const { body }= req;
    const { status, response } = this.service.create(body);

    return res.status(status).json(response);
  }
}