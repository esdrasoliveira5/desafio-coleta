import { ControllerInterface } from "../interface/ControllerInterface";
import { Request, Response } from 'express';
import Service from '../services/Services';

class Controller implements ControllerInterface {
  constructor(public service = new Service()) {}

  create = async (req: Request, res: Response): Promise<typeof res> => {
    const { body }= req;
    const { status, response } = await this.service.create(body);

    return res.status(status).json(response);
  }
}

export default Controller;