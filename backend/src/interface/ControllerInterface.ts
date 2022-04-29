import { Request, Response } from 'express';

export interface ControllerInterface {
  create(req: Request, res: Response): Promise<typeof res>
};
